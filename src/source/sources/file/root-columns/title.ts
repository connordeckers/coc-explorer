import { fileColumnRegistrar } from '../fileColumnRegistrar';
import { fileHighlights } from '../fileSource';

fileColumnRegistrar.registerColumn('root', 'title', ({ source }) => ({
  drawLine(row) {
    row.add(
      `[FILE${source.showHidden ? ' ' + source.icons.hidden : ''}]:`,
      {
        hl: fileHighlights.title,
      },
    );
  },
}));
