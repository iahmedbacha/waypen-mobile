// Window.devicePixelRatio could change, e.g., when user drags the window to a display with different pixel density,
// however, there is no callback or event available to detect the change.    
// In this sample, we assume devicePixelRatio doesn't change.
PIXEL_RATIO = window.devicePixelRatio;
MILLIMETER_PER_INCH = 25.4;
PIXEL_PER_INCH = 96;
MILLIMETER_TO_PIXELS = PIXEL_PER_INCH / (MILLIMETER_PER_INCH * PIXEL_RATIO);
PIXEL_TO_MILLIMETERS = MILLIMETER_PER_INCH * PIXEL_RATIO / PIXEL_PER_INCH;