# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このアプリは、ポケモンシリーズのゲームに登場するポケモンの「努力値」（基礎ポイント）を計算するための非公式ツールです。   
育成したいポケモンの現在のステータスと育成後のステータスを比較し、育成に必要な努力値を増減させるアイテムを算出します。

### アプリの構成

pnpm モノレポ構成

- `app/cli` - Node.js CLI ツール（`gen-pokemon` コマンド）
- `app/web` - React Web アプリ（ポケモンステータス表示・調整UI）

## コマンド

### ルート（全パッケージ共通）

```bash
pnpm run lint          # ESLint
pnpm run check:type    # 全パッケージの型チェック
pnpm run test:unit     # 全パッケージのユニットテスト
```

### Web App（app/web）

```bash
pnpm dev               # Vite 開発サーバー起動
pnpm build             # TypeScript + Vite ビルド
pnpm run test:unit     # Vitest ユニット・統合テスト
pnpm run test:vrt      # Playwright Visual Regression Test
pnpm run codegen       # GraphQL Code Generator 実行
pnpm run cosmos        # React Cosmos コンポーネント確認
```

### CLI App（app/cli）

```bash
pnpm build             # TypeScript コンパイル
pnpm run typeCheck     # 型チェック
```

## アーキテクチャ

### Web App（app/web/src/）

Presentation / Container 層の分離を採用。

- `features/` - 機能別ディレクトリ（differences, forms, search, status）
  - Presentation コンポーネント（ロジックなし・テスト容易）
  - Container コンポーネント（データ取得・ロジック担当）
- `atoms/` - Jotai atoms（グローバル状態）
- `contexts/` - React Context
- `infrastructures/queries/` - GraphQL Query 定義
- `infrastructures/gql/` - GraphQL Codegen 生成コード（手動編集不可）
- `mocks/` - MSW モックデータ
- `test-utils/` - テスト用ヘルパー・ラッパー
- `components/` - 汎用 UI コンポーネント
- `constants/` - 定数

### データフロー

- データ取得: urql（GraphQL クライアント）→ PokéAPI GraphQL beta
- 状態管理: Jotai atoms
- エラーハンドリング: Neverthrow（Result 型）
- ルーティング: TanStack Router（ファイルベース）

## 技術スタック

- **Web**: React 19, Vite, Chakra UI, TanStack Router, urql, Jotai, Neverthrow
- **CLI**: Node.js, TypeScript
- **テスト**: Vitest, Playwright, Testing Library, MSW, Happy DOM
- **コード生成**: GraphQL Code Generator

## コード規約

- インデント: スペース 2文字、改行: LF
- 引用符: ダブルクォート、セミコロン: 必須
- import 順序: builtin → external → internal → parent/sibling → type
- Neverthrow の Result 型でエラーハンドリング
