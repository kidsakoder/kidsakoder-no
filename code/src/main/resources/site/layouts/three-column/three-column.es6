import * as portal from '/lib/xp/portal';
import * as thymeleaf from '/lib/xp/thymeleaf';

exports.get = () => {
  const component = portal.getComponent();
  const views = { layout: resolve('./three-column.html') };
  const {
    config: {
      color,
    },
  } = component;

  const bgColor = `${color}`;

  const model = {
    leftRegion: component.regions.left,
    middleRegion: component.regions.middle,
    rightRegion: component.regions.right,
    color: bgColor || 'white' ,
  };

  // Render a thymeleaf template
  const body = thymeleaf.render(views.layout, model);

  // Return the result
  return {
    body,
    contentType: 'text/html',
  };
};
