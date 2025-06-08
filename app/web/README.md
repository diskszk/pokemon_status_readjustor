# ポケモンステータス再調整ツール

## 概要
このアプリは、ポケモンシリーズのゲームに登場するポケモンの「努力値」（基礎ポイント）を計算するための非公式ツールです。   
育成したいポケモンの現在のステータスと育成後のステータスを比較し、育成に必要なアイテムを算出します。

※ このアプリは、Nintendo、Creatures Inc.、またはGAME FREAK inc. とは一切関係ありません。

https://pokemon-status-readjustor.pages.dev


## 技術スタック
### 使用言語・ライブラリ
| 言語・ライブラリ       | 使用バージョン |
| ---------------------- | -------------- |
| TypeScript             | 5.6.X          |
| React                  | 19.0.X         |
| vite                   | 5.4.X          |
| jotai                  | 2.10.X         |
| urql                   | 4.1.X          |
| @tanstack/react-router | 1.92.X         |
| chakra-ui              | 2.8.X          |

### Hosting
Cloudflare Pages

### ディレクトリ構成
当アプリは The Feature Based Pattern に基づいて設計されています。 
`src/features` ディレクトリに各種機能ごとのコンポーネント・テストファイル・Storybookファイル・Custom Hook・ロジックが格納されています。

## Quick Start
### Setup
```sh
$ git clone https://github.com/diskszk/pokemon_status_readjustor.git
$ cd pokemon_status_readjustor.
$ pnpm install
$ pnpm run dev
```

### Build
```sh
$ pnpm run build
```
### lint & typecheck
```sh
$ pnpm run lint
$ pnpm run check:type
```

### Test
```sh
$ pnpm run test
```

## 著作権および商標について
「ポケットモンスター」および「ポケモン」は、Nintendo、Creatures Inc.、GAME FREAK inc. の登録商標です。  
本アプリはこれらの公式コンテンツや企業と一切関係のない、個人による非公式プロジェクトです。

このプロジェクトは非公式のファンメイドツールであり、任天堂、株式会社クリーチャーズ、株式会社ゲームフリーク、株式会社ポケモンカンパニーとは無関係です。 
すべてのポケモンの名前、画像、および関連コンテンツは、© Nintendo/Creatures Inc./GAME FREAK Inc.に帰属します。 

本企画は、原著作権者の権利を侵害する意図はなく、そのまま提供するものです。 
何か問題や懸念がありましたら、[ibalucky23@gmail.com](mailto:ibalucky23@gmail.com) までご連絡ください。速やかに対処いたします。

このアプリで使用される情報やデータは、すべてプレイヤーの利便性を目的としたものであり、公式のデータベースやリソースをコピーしたものではありません。

## 免責事項
本アプリは、プレイヤーがゲームをより楽しむための非公式ツールです。  
このアプリの利用によって発生したいかなる問題についても、開発者は責任を負いません。  
また、本アプリは営利目的で運営されておらず、ポケモンシリーズの公式データやリソースを利用しておりません。

## 使用しているリソース

- ポケモンデータ: [PokeAPI](https://pokeapi.co/)
