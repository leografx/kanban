import { DpsKanbanPage } from './app.po';

describe('dps-kanban App', () => {
  let page: DpsKanbanPage;

  beforeEach(() => {
    page = new DpsKanbanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
