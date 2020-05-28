import Translator from './index';

const translator = new Translator();
const testString: string =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz `1234567890-= ~!@#$%^&*()_+ ,./ <>? /*-+. ;: \'" []{} \\|';

test(testString);

async function test(text: string) {
  const braille: string = await translator.toBraille(text);
  const toNormal: string = await translator.toNormal(braille);

  // tslint:disable-next-line:no-console
  console.log(text);
  // tslint:disable-next-line:no-console
  console.log(braille);
  // tslint:disable-next-line:no-console
  console.log(toNormal);
}
