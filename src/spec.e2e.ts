describe('webdriver.io', () => {
  it('should have a subtitle', () => {
    browser.url('https://webdriver.io');
    expect($('.hero__subtitle')).toHaveTextContaining('automation test framework');
  });

  it('should have a logo', () => {
    browser.url('https://webdriver.io');
    expect($('.navbar__logo')).toBeDisplayed();
  });
})
