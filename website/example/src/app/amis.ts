/**
 * amis env 配置
 * 文档: https://baidu.github.io/amis/docs/start/getting-started
 *
 * 可重写 ovine 内部对 amis 一些列 env 配置
 */

import { AppAmis } from '@core/app/types'

import { definitions } from './common/renderers'
import { amisConstants } from './constants'

export const amis: AppAmis = {
  definitions, // ovine 扩展可用全局的定义，使用 $ref 引用
  constants: amisConstants,
  locale: 'en',
}
