function checkUserDevice(): string {
  const userAgent = (navigator.userAgent ||
    (navigator as any).vendor ||
    (window as any).opera) as string;

  const isMobileUA =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    );

  if (isMobileUA) {
    return 'Mobile';
  }
  return 'Desktop';
}

export default checkUserDevice;
