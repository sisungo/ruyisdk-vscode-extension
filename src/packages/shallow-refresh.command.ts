// SPDX-License-Identifier: Apache-2.0
import * as vscode from 'vscode'

import { PackagesTreeProvider } from './package-tree.provider'

export default function registerShallowRefreshCommand(ctx: vscode.ExtensionContext, provider: PackagesTreeProvider) {
  const disposable = vscode.commands.registerCommand(
    'ruyi.packages.shallow-refresh',
    async () => {
      await provider.shallowRefresh()
    },
  )

  ctx.subscriptions.push(disposable)
}
