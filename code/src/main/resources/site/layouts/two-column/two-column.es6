import * as portal from '/lib/xp/portal';
import * as thymeleaf from '/lib/xp/thymeleaf';

const views = {
  layout: resolve('./two-column.html'),
};

exports.get = () => {

  // Find the current component.
  const component = portal.getComponent();
  const {
    config: {
      color,
    },
  } = component;

  const bgColor = `${color}`;

  // Define the model
  const model = {
    leftRegion: component.regions.left,
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
