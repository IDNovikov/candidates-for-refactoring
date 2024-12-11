//сделал построение строки через шаблонные строки 
const render = (size: number): string => {
  let html = '<hr';

  if (size > 0) {
    html += ` size="${size + 1}"`;
  }

  html += '>';

  return html;
};
