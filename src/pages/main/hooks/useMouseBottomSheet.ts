import {
  BOTTOM_SHEET_MIN_Y,
  BOTTOM_SHEET_MAX_Y,
  BOTTOM_SHEET_HIDE_HEIGHT,
} from '@/common/constants/ui';
import { useRef, useEffect } from 'react';

interface BottomSheetMetrics {
  mouseClickStart: {
    sheetY: number;
    clickY: number;
  };
  mouseMove: {
    prevClickY?: number;
    movingDirection: 'none' | 'down' | 'up';
    isMouseDown: boolean;
  };
  isContentAreaTouched: boolean;
}

interface BottomSheetProps {
  setIsBottomSheetOpen?: (clickedAccountList: boolean) => void;
}

export default function useMouseBottomSheet({
  setIsBottomSheetOpen,
}: BottomSheetProps) {
  let MIN_Y = BOTTOM_SHEET_MIN_Y,
    MAX_Y = BOTTOM_SHEET_MAX_Y;

  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const metrics = useRef<BottomSheetMetrics>({
    mouseClickStart: {
      sheetY: 0,
      clickY: 0,
    },
    mouseMove: {
      prevClickY: 0,
      movingDirection: 'none',
      isMouseDown: false,
    },
    isContentAreaTouched: false,
  });

  const canUserMoveBottomSheet = () => {
    const { mouseMove, isContentAreaTouched } = metrics.current;
    const scrollTop = content.current!.scrollTop;

    if (isContentAreaTouched) {
      if (scrollTop > 0) {
        return false;
      }

      if (mouseMove.movingDirection === 'down' && scrollTop === 0) {
        return true;
      }
    }

    if (sheet.current!.getBoundingClientRect().y > MIN_Y) {
      return true;
    }

    if (mouseMove.movingDirection === 'up') {
      if (scrollTop === 0) {
        return true;
      }
    }

    return false;
  };

  const resetMetrics = () => {
    metrics.current = {
      mouseClickStart: {
        sheetY: 0,
        clickY: 0,
      },
      mouseMove: {
        prevClickY: 0,
        movingDirection: 'none',
        isMouseDown: false,
      },
      isContentAreaTouched: false,
    };
  };

  useEffect(() => {
    const handleMouseStart = (e: MouseEvent) => {
      e.stopPropagation();
      const { mouseClickStart, mouseMove } = metrics.current;
      mouseClickStart.sheetY = sheet.current!.getBoundingClientRect().y;
      mouseClickStart.clickY = e.clientY;
      mouseMove.isMouseDown = true;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { mouseClickStart, mouseMove } = metrics.current;
      if (!mouseMove.isMouseDown) return;
      const currentTouchY = e.clientY;

      if (mouseMove.prevClickY === undefined) {
        mouseMove.prevClickY = currentTouchY;
      }

      if (mouseMove.prevClickY === 0) {
        mouseMove.prevClickY = currentTouchY;
      }

      if (mouseMove.prevClickY < currentTouchY) {
        mouseMove.movingDirection = 'down';
      }

      if (mouseMove.prevClickY > currentTouchY) {
        mouseMove.movingDirection = 'up';
      }

      // 내부 컨텐츠가 스크롤되지 않도록 기본 동작 차단
      const sheetTop = sheet.current!.getBoundingClientRect().top;
      const isScrollingUp = mouseMove.movingDirection === 'up';

      if (sheetTop < -BOTTOM_SHEET_HIDE_HEIGHT && isScrollingUp) {
        e.preventDefault(); // 내부 컨텐츠 스크롤 방지
      }

      // 바텀시트 움직임 조건 확인
      if (canUserMoveBottomSheet()) {
        const touchOffset = currentTouchY - mouseClickStart.clickY;
        let nextSheetY = currentTouchY + touchOffset;

        if (nextSheetY <= MIN_Y) {
          nextSheetY = MIN_Y;
        }

        if (nextSheetY >= MAX_Y) {
          nextSheetY = MAX_Y;
        }
        sheet.current!.style.setProperty(
          'transform',
          `translateY(${nextSheetY - MAX_Y}px)`,
        );
      } else {
        document.body.style.overflowY = 'scroll';
      }
    };

    const handleMouseEnd = () => {
      document.body.style.overflowY = 'scroll';
      const { mouseMove } = metrics.current;

      const currentSheetY = sheet.current!.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (
          mouseMove.movingDirection === 'down' &&
          content.current!.scrollTop <= 0
        ) {
          if (setIsBottomSheetOpen) setIsBottomSheetOpen(false);
          sheet.current!.style.setProperty('transform', 'translateY(0)');
        }

        if (mouseMove.movingDirection === 'up') {
          sheet.current!.style.setProperty(
            'transform',
            `translateY(${MIN_Y - MAX_Y}px)`,
          );
        }
      }
      resetMetrics();
    };

    if (sheet.current) {
      sheet.current.addEventListener('mousedown', handleMouseStart);
      sheet.current.addEventListener('mousemove', handleMouseMove);
      sheet.current.addEventListener('mouseup', handleMouseEnd);
    }

    return () => {
      if (sheet.current) {
        sheet.current.removeEventListener('mousedown', handleMouseStart);
        sheet.current.removeEventListener('mousemove', handleMouseMove);
        sheet.current.removeEventListener('mouseup', handleMouseEnd);
      }
    };
  }, []);

  const handleUp = () => {
    if (sheet.current === null) return;
    sheet.current!.style.setProperty(
      'transform',
      `translateY(${MIN_Y - MAX_Y}px)`,
    );

    resetMetrics();
  };

  const handleDown = () => {
    sheet.current!.style.setProperty('transform', `translateY(${MAX_Y}px)`);
    if (setIsBottomSheetOpen) setIsBottomSheetOpen(false);
    resetMetrics();
  };

  return { sheet, content, handleUp, handleDown };
}
