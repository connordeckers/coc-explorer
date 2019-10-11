# coc-explorer

Explorer extension for [coc.nvim](https://github.com/neoclide/coc.nvim)

**Note: Still under development, maybe has some breaking changes.**

[![Build Status](https://travis-ci.com/weirongxu/coc-explorer.svg?branch=master)](https://travis-ci.com/weirongxu/coc-explorer)

## Screenshot

![image](https://user-images.githubusercontent.com/1709861/64966850-1e9f5100-d8d2-11e9-9490-438c6d1cf378.png)

## Requirements

- `>= vim 8.0` or `>= neovim 0.3.1`

## Usage

1. Install by coc.nvim command:
   ```
   :CocInstall coc-explorer
   ```
2. Configuration custom vim mapping
   ```
   :nmap ge :CocCommand explorer<CR>
   ```
3. Open explorer
   ```
   ge
   ```
4. Press `?` to show mappings help

## Feature

- [x] Buffer source
  - [x] Highlight visible buffers in real time (neovim only)
- [x] File tree source
  - [x] Basic actions
    - [x] Open file in select / vsplit / tab  
           `explorer.openAction.strategy` options:
      - vsplit: open action with vsplit by default
      - previousBuffer: open action use last used buffer by default
      - select: open action use selection ui by default
    - [x] Selection
    - [x] Cut / Copy / Paste
    - [x] Delete action use trash by default
  - [x] Git status
  - [x] Highlight current buffer in real time (neovim only)
  - [x] Icons, use [nerdfont](https://github.com/ryanoasis/nerd-fonts)
  - [x] Coc-list
  - [ ] LSP
    - [x] diagnostic
    - [ ] file rename
  - [ ] Exrename, like [defx](https://github.com/Shougo/defx.nvim)
  - [ ] Archive file (use `lsar / unar`)
  - [ ] SSH
- [ ] Git source
  - [ ] Git actions
- [x] Show help

## Command

```
:CocCommand explorer [options] [root-path]
```

### Example

```
:CocCommand explorer
    \ --toggle
    \ --sources=buffer+,file+
    \ --file-columns=git,selection,clip,indent,filename,size /root/path
```

### Options

#### `[root-path]`

Explorer root, default: `workspace.rootPath` or `workspace.cwd`

#### `--sources`

Explorer sources, example: `buffer+,file+`, default: `buffer-,file+`

#### `--toggle --no-toggle`

Close the explorer if it exists, default: `--toggle`

#### `--width`

Explorer window width, default: `40`

#### `--position`

Explorer position, supported position: `left`, `right`, `tab`, default: `left`

#### `--reveal`

Explorer will expand to this filepath, default: `current buffer`

#### `--buffer-columns`

Explorer buffer columns, supported columns:

- selection
- name
- bufname
- modified
- bufnr

#### `--file-columns`

Explorer file columns, supported columns:

- git
- selection
- icon
- filename
- indent
- readonly
- clip
- size
- diagnosticError
- diagnosticWarning
- created
- modified
- accessed

## Inspired by

- VSCode Explorer
- [Shougo/vimfiler.vim](https://github.com/Shougo/vimfiler.vim)
- [Shougo/defx.vim](https://github.com/Shougo/defx.vim)
- [lambdalisue/fila.vim](https://github.com/lambdalisue/fila.vim)
