const template = (variables, { tpl }) => {
  const componentName = variables.componentName.replace("Svg", "");

  const comment = `/**
 * This is ${componentName} icon
 * @param ${componentName}Props - All normal SVG props are expected
 * @returns JSX.Element
 */ \n`;

  return tpl`
${variables.imports};

${variables.interfaces};

${comment}
const ${componentName} = forwardRef((${variables.props}) => (
  ${variables.jsx}
));

${componentName}.displayName = "${componentName}";

export { ${componentName} };
`;
};

module.exports = template;
