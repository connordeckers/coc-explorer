import { bufferColumnRegistrar } from '../buffer-column-registrar';
import { bufferHighlights } from '../buffer-source';
import { getEnableNerdfont } from '../../../../util';

bufferColumnRegistrar.registerColumn('readonly', () => ({
  labelOnly: (node) => node.readonly,
  draw(row, node) {
    if (node.readonly) {
      row.add(node.readonly ? (getEnableNerdfont() ? '' : 'RO') : '', bufferHighlights.readonly);
      row.add(' ');
    }
  },
}));
