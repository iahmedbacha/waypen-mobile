// Service endpoint configurations

SERVER_ADDRESS = "https://waypen-ink-recognizer.cognitiveservices.azure.com";
ENDPOINT_URL = SERVER_ADDRESS + "/inkrecognizer/v1.0-preview/recognize";
SUBSCRIPTION_KEY = "7f2d7aeac1684f5d9337dc06e38b9e7a";

// Languages for user to try
LANGUAGE_TAGS_TO_TRY = ["en-US", "de-DE", "en-GB", "fr-FR", "hi-IN", "ja-JP", "ko-KR", "zh-CN"];

// Window.devicePixelRatio could change, e.g., when user drags the window to a display with different pixel density,
// however, there is no callback or event available to detect the change.    
// In this sample, we assume devicePixelRatio doesn't change.
PIXEL_RATIO = window.devicePixelRatio;
MILLIMETER_PER_INCH = 25.4;
PIXEL_PER_INCH = 96;
MILLIMETER_TO_PIXELS = PIXEL_PER_INCH / (MILLIMETER_PER_INCH * PIXEL_RATIO);
PIXEL_TO_MILLIMETERS = MILLIMETER_PER_INCH * PIXEL_RATIO / PIXEL_PER_INCH;