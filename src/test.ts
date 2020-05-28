import Translator from './index';

const translator = new Translator();
const testString: string =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz `1234567890-= ~!@#$%^&*()_+ ,./ <>? /*-+. ;: \'" []{} \\|';

test(testString);

async function test(text: string) {
  // Convert noraml chars to braille chars
  const braille: string = await translator.toBraille(text);

  // Convert braille chars to normal chars
  const toNormal: string = await translator.toNormal(braille);

  // tslint:disable-next-line:no-console
  console.log(text);
  // tslint:disable-next-line:no-console
  console.log(braille);
  // tslint:disable-next-line:no-console
  console.log(toNormal);
}
