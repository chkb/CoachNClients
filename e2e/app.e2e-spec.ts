import { CoachAppPage } from './app.po';

describe('coach-app App', function() {
  let page: CoachAppPage;

  beforeEach(() => {
    page = new CoachAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
