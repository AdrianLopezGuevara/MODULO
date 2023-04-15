import fs from "fs";
export const Montserrat = fs.readFileSync(
  "./fonts/Montserrat/static/Montserrat-Regular.ttf"
);
export const MontserratBold = fs.readFileSync(
  "./fonts/Montserrat/static/Montserrat-BoldItalic.ttf"
);
export const MontserratBoldN = fs.readFileSync(
  "./fonts/Montserrat/static/Montserrat-Bold.ttf"
);