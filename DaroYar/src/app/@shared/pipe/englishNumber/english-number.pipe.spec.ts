import { EnglishNumberPipe } from "./english-number.pipe";


describe('EnglishNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new EnglishNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
