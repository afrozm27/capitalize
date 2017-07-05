import { FirstSampleCliPage } from './app.po';

describe('first-sample-cli App', () => {
  let page: FirstSampleCliPage;

  beforeEach(() => {
    page = new FirstSampleCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
