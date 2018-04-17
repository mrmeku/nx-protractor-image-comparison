import { AppPage } from './app.po';
import { imageComparison } from './image-comparison';

describe('demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.text()).toContain('Welcome');
  });

  it('should match the page', () => {
    expect(imageComparison.checkScreen('examplePage')).toEqual(0);
  });
});
