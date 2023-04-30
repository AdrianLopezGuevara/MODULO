const MontserratURL = "../fonts/Montserrat/static/Montserrat-Regular.ttf";
const MontserratBoldURL = "../fonts/Montserrat/static/Montserrat-BoldItalic.ttf";
export const Montserrat = await fetch(MontserratURL).then(res => res.arrayBuffer())
export const MontserratBold = await fetch(MontserratBoldURL).then(res => res.arrayBuffer())