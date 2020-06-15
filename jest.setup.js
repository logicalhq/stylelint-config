global.expect.extend({
  toHaveBeenParsed(results) {
    const [result] = results;

    return { pass: !result.parseErrors.length };
  },
  toHaveAnError(results, rule, context = {}) {
    const [result] = results;

    if (result.warnings.length === 0) {
      return { pass: false, message: 'No errors were produced by the linter' };
    }

    const warning = result.warnings.find(
      el => el.severity === 'error' && el.rule === rule
    );

    if (!warning) {
      return {
        pass: false,
        message: () => `There are no '${rule}' error present in the collection`
      };
    }

    for (const prop of ['line', 'column', 'text']) {
      if (context[prop] && context[prop] !== warning[prop]) {
        return {
          pass: false,
          message: () =>
            `Expected ${prop} '${context[prop]}' to match error ${prop} '${warning[prop]}'`
        };
      }
    }

    return {
      pass: true,
      message: () => `A '${rule}' error is present in the collection`
    };
  }
});
