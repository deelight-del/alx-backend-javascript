export default function guardrail(mathFunction) {
  try {
    const queue = [mathFunction(), 'Guardrail was processed'];
    return queue;
  } catch (error) {
    const queue = [`${error.name}: ${error.message}`, 'Guardrail was processed'];
    return queue;
  }
}
