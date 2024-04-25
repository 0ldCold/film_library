import localFont from "next/font/local";

export const openSans = localFont({
  variable: "--font-openSans",
  src: [
    {
      path: "public/fonts/OpenSans/OpenSans-VariableFont_wdth,wght.ttf",
      style: "normal",
      weight: "400"
    },
    {
      path: "public/fonts/OpenSans/OpenSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
      weight: "400"
    }
  ]
});

export const helveticaNeueCyr = localFont({
  variable: "--font-helveticaNeueCyr",
  src: [
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Black.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BlackItalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Bold.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-BoldItalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Heavy.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-HeavyItalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Italic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Light.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-LightItalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Medium.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-MediumItalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Roman.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "public/fonts/HelveticaNeueCyr/HelveticaNeueCyr-Thin.ttf",
      weight: "400",
      style: "normal"
    }
  ]
});
