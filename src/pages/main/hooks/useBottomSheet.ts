import {
  BOTTOM_SHEET_MIN_Y,
  BOTTOM_SHEET_MAX_Y,
  REF_HEIGHT,
  BOTTOM_SHEET_HIDE_HEIGHT,
} from '@/common/constants/ui';
import { useRef, useEffect } from 'react';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
    touchX: number;
  };
  touchMove: {
    prevTouchY?: number;
    prevTouchX?: number;
    movingDirection: 'none' | 'down' | 'up' | 'row';
  };
  isContentAreaTouched: boolean;
}

interface BottomSheetProps {
  setIsBottomSheetOpen?: (clickedAccountList: boolean) => void;
}
export default function useBottomSheet({
  setIsBottomSheetOpen,
}: BottomSheetProps) {
  let MIN_Y = BOTTOM_SHEET_MIN_Y,
    MAX_Y = BOTTOM_SHEET_MAX_Y;

  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const filter = useRef<HTMLDivElement>(null);
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
      touchX: 0,
    },
    touchMove: {
      prevTouchY: 0,
      prevTouchX: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
  });

  useEffect(() => {
    const canUserMoveBottomSheet = () => {
      const { touchMove, isContentAreaTouched } = metrics.current;
      const scrollTop = content.current!.scrollTop;
      if (isContentAreaTouched) {
        console.log(sheet.current!.getBoundingClientRect().y);
        if (scrollTop > 0) {
          return false;
        }

        // 아래로 스크롤 중일 때, scrollTop이 0이어야만 바텀시트 이동 허용
        if (touchMove.movingDirection === 'down' && scrollTop === 0) {
          return true;
        }
      }

      // 바텀시트가 최소 위치보다 위에 있을 때는 기본적으로 이동 허용
      if (
        sheet.current!.getBoundingClientRect().y > MIN_Y ||
        sheet.current!.getBoundingClientRect().y === -39
      ) {
        return true;
      }

      // 위로 스크롤 중일 때 컨텐츠가 맨 위에 있어야 바텀시트 이동 허용
      if (touchMove.movingDirection === 'up') {
        return scrollTop <= 0;
      }

      return false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      e.stopPropagation();
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;
      touchStart.touchX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const { touchStart, touchMove } = metrics.current;
      const currentTouch = e.touches[0];
      const Ydiff = currentTouch.clientY - touchStart.touchY;
      const Xdiff = currentTouch.clientX - touchStart.touchX;

      if (touchMove.prevTouchY === undefined) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (touchMove.prevTouchY === 0) {
        touchMove.prevTouchY = touchStart.touchY;
      }

      if (Ydiff > 0 && (Math.abs(Ydiff / Xdiff) > 1 || Xdiff === 0)) {
        touchMove.movingDirection = 'down';
      }
      if (Ydiff < 0 && (Math.abs(Ydiff / Xdiff) > 1 || Xdiff === 0)) {
        touchMove.movingDirection = 'up';
      }

      if (Ydiff == 0 || Xdiff / Ydiff > 1) {
        touchMove.movingDirection = 'row';
      }

      // 내부 컨텐츠가 스크롤되지 않도록 기본 동작 차단
      const sheetTop = sheet.current!.getBoundingClientRect().top;
      const isScrollingUp = touchMove.movingDirection === 'up';

      if (sheetTop > 0 && isScrollingUp) {
        e.preventDefault(); // 내부 컨텐츠 스크롤 방지
      }

      if (touchMove.movingDirection === 'row') {
        return;
      }

      // 바텀시트 움직임 조건 확인
      if (canUserMoveBottomSheet()) {
        const touchOffset = currentTouch.clientY - touchStart.touchY;
        let nextSheetY = touchStart.sheetY + touchOffset;

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

    const handleTouchEnd = () => {
      document.body.style.overflowY = 'scroll';
      const { touchMove } = metrics.current;

      const currentSheetY = sheet.current!.getBoundingClientRect().y;

      if (currentSheetY !== MIN_Y) {
        if (
          touchMove.movingDirection === 'down' &&
          content.current!.scrollTop <= 0
        ) {
          if (setIsBottomSheetOpen) setIsBottomSheetOpen(false);
          sheet.current!.style.setProperty('transform', 'translateY(0)');
        }

        if (touchMove.movingDirection === 'up') {
          sheet.current!.style.setProperty(
            'transform',
            `translateY(${MIN_Y - MAX_Y}px)`,
          );
        }
      }

      // metrics 초기화.
      metrics.current = {
        touchStart: {
          sheetY: 0,
          touchY: 0,
          touchX: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
        isContentAreaTouched: false,
      };
    };

    if (sheet.current) {
      sheet.current.addEventListener('touchstart', handleTouchStart);
      sheet.current.addEventListener('touchmove', handleTouchMove);
      sheet.current.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (sheet.current) {
        sheet.current.removeEventListener('touchstart', handleTouchStart);
        sheet.current.removeEventListener('touchmove', handleTouchMove);
        sheet.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  const handleUp = () => {
    if (sheet.current === null) return;
    sheet.current!.style.setProperty(
      'transform',
      `translateY(${MIN_Y - MAX_Y}px)`,
    );

    // metrics 초기화.
    metrics.current = {
      touchStart: {
        sheetY: 0,
        touchY: 0,
        touchX: 0,
      },
      touchMove: {
        prevTouchY: 0,
        movingDirection: 'none',
      },
      isContentAreaTouched: false,
    };
  };

  const handleDown = () => {
    sheet.current!.style.setProperty('transform', `translateY(${MAX_Y}px)`);
    if (setIsBottomSheetOpen) setIsBottomSheetOpen(false);
    // metrics 초기화.
    metrics.current = {
      touchStart: {
        sheetY: 0,
        touchY: 0,
        touchX: 0,
      },
      touchMove: {
        prevTouchY: 0,
        movingDirection: 'none',
      },
      isContentAreaTouched: false,
    };
  };

  useEffect(() => {
    const handleTouchStart = () => {
      metrics.current!.isContentAreaTouched = true;
    };

    if (content.current)
      content.current!.addEventListener('touchstart', handleTouchStart);
    return () => {
      if (content.current)
        content.current!.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return { sheet, content, filter, handleUp, handleDown };
}
