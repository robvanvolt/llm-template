export default function BaseTemplate(
  { config, configInput }: TemplateProps,
) {
  if (!config && !configInput) {
    return <div>Both textareas do not contain valid JSON!</div>;
  }
  if (!config) {
    return <div>Layout textarea does not contain valid JSON!</div>;
  }
  if (!configInput) {
    return (
      <div>Config example input textarea does not contain valid JSON!</div>
    );
  }
  return (
    <div>
      <div>BaseTemplate</div>
      <div>
        {/* config is used as a layout parser for the tailwindcss classes */}
        {JSON.stringify(config)}

        {/* configInput is used as a mean to populate the layout with content */}
        {JSON.stringify(configInput)}
      </div>
    </div>
  );
}
