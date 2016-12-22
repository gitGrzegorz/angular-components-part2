import { AngularComponentsPart2Page } from './app.po';

describe('angular-components-part2 App', function() {
  let page: AngularComponentsPart2Page;

  beforeEach(() => {
    page = new AngularComponentsPart2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
