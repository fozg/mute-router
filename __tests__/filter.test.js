const RouterMute = require('../index');

test('filter by params array should works', () => {
  const RouterM = new RouterMute({
    path: '/test',
    params: ['sort', 'order']
  });

  expect(
    RouterM.filterParams({
      sort: 'created',
      order: 'asc',
      unuseParam: 'testing'
    })
  ).toEqual({
    sort: 'created',
    order: 'asc'
  });
});
