{
    "workbench.colorTheme": "Default Light+",
    "locale": "zh-cn",
    "editor.fontSize": 20,
    "editor.lineHeight": 30,
    "editor.tabSize": 2,
    "git.ignoreWindowsGit27Warning": true,
    "explorer.confirmDelete": false,
    "editor.formatOnSave": false,
    // #每次保存的时候将代码按eslint格式进行修复 ,"eslint.autoFixOnSave": true 这个已经过时了
    "editor.codeActionsOnSave": {
        // For ESLint
        "source.fixAll.eslint": false
    },
    //  #让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.format.enable": false,
    // 启用或禁用在 VS Code 中重命名或移动文件时自动更新导入路径的功能。
    "javascript.updateImportsOnFileMove.enabled": "always",
    // 启用或禁用在 VS Code 中重命名或移动文件时自动更新导入路径的功能。
    "typescript.updateImportsOnFileMove.enabled": "always",
    // 文件目录左侧icon图标区分 
    "workbench.iconTheme": "material-icon-theme",
    "search.followSymlinks": false,
    "editor.detectIndentation": false,
    "vetur.format.options.tabSize": 2,
    // #让vue中的js按编辑器自带的ts格式进行格式化
    "vetur.format.defaultFormatter.js": "prettier-eslint",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-expand-multiline",
            "end_with_newline": false
        }
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
    },
    // 不控制vue的格式化，dbaeumer.vscode-eslint 不会对格式化生效，但是会提示
    // 为了防止prettier-vue 和eslint 冲突
    // .vue文件使用vetur就够了
    // "[vue]": {
    //     "editor.defaultFormatter": "octref.vetur"
    // },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // 不控制json的格式化，容易对HCP i18n文件进行大量格式化，产生冲突
    // "[json]": {
    //     "editor.defaultFormatter": "vscode.json-language-features"
    // },
    // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认。
    "explorer.confirmDragAndDrop": false,
    "sync.quietSync": true,
    "sync.removeExtensions": false,
    "sync.syncExtensions": true,
    "sync.forceUpload": false,
    "editor.renderControlCharacters": true,
    "editor.fontFamily": "'Fira Code',Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "prettier.semi": true, // 句尾添加分号
    "prettier.singleQuote": true, // 使用单引号代替双引号
    "leetcode.defaultLanguage": "javascript",
    "leetcode.endpoint": "leetcode-cn",
    "leetcode.workspaceFolder": "",
    "leetcode.filePath": {
      "default": {
        "folder": "",
        "filename": "${id}.${kebab-case-name}.${ext}"
      }
    },
    "liveServer.settings.donotShowInfoMsg": true,
    "editor.rename.enablePreview": false,
    "workbench.editor.enablePreview": false,
    "sync.gist": "0b528c41312fcd5e4a4aa2ddd5d04363",
    "terminal.integrated.defaultProfile.windows": "Command Prompt",
    "security.workspace.trust.untrustedFiles": "open",
    "git.confirmSync": false,
    "[json]": {
      "editor.defaultFormatter": "vscode.json-language-features"
    },
    "npm.keybindingsChangedWarningShown": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "window.zoomLevel": -1
  }
