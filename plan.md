# MDN 翻訳の流れ

## あらまし

- 基本的にはよくある GitHub のリポジトリーに Pull request を送るなどして貢献するときのフローと変わりません
    - ただし、 Issue を送るリポジトリーと、変更を加えて Pull request を送るリポジトリー、翻訳する原文があるリポジトリー、それぞれが分かれているのでご注意ください

## 二つの大まかな流れ

1. お手軽ルート
    - GitHub 上のエディターを使うので、モダンなブラウザーさえ動作すれば参加できる
    - 編集中にはプレビューできない
    - 好きなエディターで編集できない
    - => 誤字脱字の修正など、細かい修正の場合のみおすすめ
1. 本格ルート
    - Node.js などのインストールが必要
    - 編集中にプレビューできる
        - MDNのMarkdown固有の構文が正しく書けているかのチェックもしやすい
    - 好きなエディターが使える

## 用意するもの

- お手軽ルート・本格ルート共通
    - GitHub アカウント
    - GitHub を利用できるウェブブラウザー
    - [Japanese Mozilla community group の Slack](https://join.slack.com/t/mozillajp/shared_invite/enQtMjI2NDMwODUwNzY5LTIxZTg0YzJhMjFiYjc3NDIzNzQ3NTgyZmI1ZGQ2YWNhZmRlMzdlZWVlYTc3OGJiOGYzZTE2NThjYzFhMGMwYzQ) におけるアカウント
        - 質問があったらこちらの #translation チャンネルでお願いします
- 本格ルート
    - Node.js
    - Yarn
    - Git
    - 好きなテキストエディター

## お手軽ルート

// *NOTE*:
// 撮影の際は撮り直しがしやすいよう、実際のリポジトリーをフォークして、リポジトリーのページをDev Toolsで書き換えて本物に見せかけた状態で撮影します。

### 1. 修正する記事を選ぶ

「お手軽ルート」では原則誤字脱字の修正など、軽微な修正を行う場合のみおすすめなので、そういう記事を探しましょう。[こちらのリポジトリーにある、日本語の翻訳に関する Issue の一覧](https://github.com/mozilla-japan/translation/issues)から探すのも良いでしょう。

<!-- https://github.com/mdn/translated-content/tree/main/files/ja/glossary/accessibility/index.md の「web」を「ウェブ」にするのがよさそう？ -->

ここでは例として「hoge」を修正します。表記の規約により、現在は「hoge」はアルファベットではなくカタカナで書くように定めているのですが、探してみた所準拠できてないケースが見つかったので、この機会に修正してみます。

<!--
// *NOTE*:
// *相談事項*:
// (A) 手元で https://docs.google.com/spreadsheets/d/1y-hC-xMXawCgcYZwJDnvuSlAOTgMRLLyqXurpYkJbYE/edit#gid=0 を参考に検索してみた所、準拠できていないケースが散見されたので、実際に修正するPull requestを送るか、
// => こちらを採用
// (B) あるいは、適当な修正事項を「実際にはしないでね」と断わった上で、他の表現の修正をするか。
// (A) の場合、同様の修正を真似してくる人が多く出ることを歓迎するか否かが気になる
// => 問題なし: https://github.com/igrep/intro-mdn-translation-ja/pull/1#discussion_r1359177405
-->

### 2. GitHub に Issue を作成する

<!--
// *NOTE*:
// もちろん作成済みのIssueから取り組む内容を選ぶのでもよいが、この動画では省略
// *相談事項*: 月例ミートアップ時の固有の手順もこの動画では省略する？
//  => 省略する
-->

修正する記事を選んだら、GitHub に Issue を作成して、作業に取り組むことを宣言しましょう。

先ほども軽く触れたのですが、MDN の翻訳コミュニティでは、日本語の翻訳に関する Issue をやりとりする専用のリポジトリーを用意しています:

- <https://github.com/mozilla-japan/translation/>

こちらは、MDN 日本語版について、「このページが翻訳できていない」や、「このページの翻訳が間違っている」、あるいは「このページの翻訳が古い」などの問題を報告するリポジトリーです。

今回取り組む問題も、早速報告してみましょう。今回は既に確認している、ということにしますが、実際に報告する際は、既に同じ Issue が報告されていないかのチェックも忘れないようよろしくお願いします。

### 3. 実際に翻訳して、Pull requestを送る

Issue の報告ができたら、いよいよ作業開始です。mozilla-japan/translation のリポジトリーはあくまでも Issue を報告する専用のリポジトリーですので、こちらの mdn/translated-content というリポジトリーを開きます:

- <https://github.com/mdn/translated-content>

開けたら、GitHub 上で対象のファイルを開きましょう。このリポジトリーには、MDNを翻訳した文が集約されています。files/ja というディレクトリー以下に、日本語に翻訳したファイルが含まれています。今回は hoge にある index.md というファイルを編集するので、該当のファイルがある hoge/ まで辿ります。

字幕で注意書き: 撮影時点でのGitHubの画面です。多かれ少なかれ現在のものと異なる可能性があります。

対象のファイル hoge がありましたね。続いて右上の鉛筆マークをクリックして、GitHub 上のエディターを起動します。

このリポジトリーを初めて編集する場合は、次のように、リポジトリーをフォークしなければならない旨を示す画面が表示されます。指示に従って「Fork this repository」という緑色のボタンを押しましょう。

リポジトリーの Fork が終わると、そのまま GitHub 上のエディターが起動します。

今回は「hoge」をカタカナでの表記に書き換えるのがゴールなので、そのように編集します。

編集できたら、右上の「Commit changes...」という緑色のボタンをクリックしてください。

コミットメッセージを記入する画面が現れるので、コミットメッセージを書きましょう。コミットメッセージの形式について、特に明確な決まりはありませんが、慣習に従い、日本語の翻訳についての修正であることを分かりやすくするために、 `[ja]` と頭に付け加えておきます。更に、どのページをどう書き換えたか、それぞれ明確にします。今回は hoge における表記を変えたので「hoge 『hoge』を表記のルールに沿えるよう『hoge』に変更」と書きます。更にコミットメッセージの詳細として、先ほど作成したIssueのURLを貼り付けておくとなおよいです。

コミットメッセージが書けたら、右下の「Propose changes」という緑色のボタンを押しましょう。

今度は変更内容を確認する画面に移ります。正しく変更できたことをチェックした上で、「Create pull request」という緑色のボタンを押してください。

あともう少しです。今度はPull requestを作成する画面に切り替わるので、Pull requestのタイトルや説明を記載してください。今回はコミットが一つだけですし、作成したコミットのコミットメッセージをコピペしてタイトルにしたり、作成した Issue の URL を description に記載すれば十分かと思います。

一通り書き終えたら「Create pull request」という緑色のボタンをクリックして、Pull request の完成です！

### 4. レビューなどへの対応

以降は、GitHub で Pull request を送ったことのある方であれば慣れた流れかも知れません。

Pull request を作成すると、自動的にレビュアーが割り当てられます。レビュアーからのフィードバックを待ちましょう。

レビュアーから修正依頼をもらったら、素直に直してください。

直す際は Pull request 画面の「Files changed」タブから修正したいファイルの名前の右側にある「・・・」と書かれた箇所をクリックし、「Edit file」をクリックすれば、先ほども使用した GitHub 上のエディターが起動します。後は編集して、先ほどと同様に「Commit changes...」という緑色のボタンを押しましょう。

修正依頼に一通り対応したら、Pull request 画面の「Conversation」タブの右側、「Reviwers」の一覧からレビュアーの名前を探して右側にある🔄「Re-request review」ボタンをクリックしてください。

レビュアーに再度レビューをするよう通知が飛びます。

レビューと修正を繰り返して、最終的に全ての問題を解決できれば、マージしてもらえるはずです。

Pull request をマージしてもらうと、最長48時間以内に加えた修正が MDN に反映されます。気長に待ちましょう。

以上が、MDN の翻訳「お手軽ルート」、誤字の修正など、簡単な修正を加えたいときにお勧めの方法です。ウェブブラウザーさえ使えればよいので、MDN の翻訳をとりあえずやってみたい！という方にも良いでしょう。

<!-- TODO: Issue の close について言及する？ -->

## 本格ルート

ここからは「本格ルート」、編集中の内容をプレビューするアプリケーションをセットアップした上で、ご利用のコンピューター上の Git などを使い、作業します。

### 用意するもの

お手軽ルートでも利用した GitHub アカウントやウェブブラウザーに加えて、次のソフトウェアをあらかじめお使いのコンピューターにインストールしておいてください。

- Node.js
- Yarn
- Git
- 好きなテキストエディター

今回はこれらのインストール方法については特に解説しないので、各自で調べてください。

上手くインストールできなかった場合は、概要欄に書いた Slack Workspace で相談するのがおすすめです。

バージョンは、比較的新しいものであれば問題ないでしょう。

### 1. 修正する記事を選ぶ

まずは「お手軽ルート」と同様に、翻訳する記事を選びます。

特に翻訳するページが決まっていない場合は、こちらからまだ翻訳されていないページを探すと良いでしょう。

- <https://mdn.lavoscore.org/>

<!-- どの記事を選ぶかは未定 -->

今回は「hoge」という記事を翻訳します。

### 2. GitHub に Issue を作成する

こちらも「お手軽ルート」と同様です。特筆することもないので説明は簡単に行います。

- <https://github.com/mozilla-japan/translation/>

先ほども紹介したこちらのリポジトリーに移動して、同じ Issue が報告されていないかチェックの上、Issue を報告して作業を宣言します。

### 3. 実際に翻訳して、Pull requestを送る

WIP

### 4. レビューなどへの対応

これ以降については、「お手軽ルート」と変わらないので割愛します。Pull request を送って、レビュアーからの指摘に真摯に対応しましょう。

# まとめ・関連するウェブページ

- 本動画の構成を決めるに当たって参考にしたページ
    - <https://mozilla-japan.github.io/mdn-translation-guide/>
    - 今回は触れていない手順や注意事項も書かれているのでご覧ください

- Issue を送るリポジトリー:
    - <https://github.com/mozilla-japan/translation/>
- Pull request を送るリポジトリー:
    - <https://github.com/mdn/translated-content>
- 翻訳する原文があるリポジトリー:
    - <https://github.com/mdn/content>
- 翻訳する記事を探すのに便利なページ
    - <https://mdn.lavoscore.org/>

- 相談は [Japanese Mozilla community group の Slack の #translation チャンネルで！](https://join.slack.com/t/mozillajp/shared_invite/enQtMjI2NDMwODUwNzY5LTIxZTg0YzJhMjFiYjc3NDIzNzQ3NTgyZmI1ZGQ2YWNhZmRlMzdlZWVlYTc3OGJiOGYzZTE2NThjYzFhMGMwYzQ) で

- [Editorial Guideline · mozilla-japan/translation Wiki](https://github.com/mozilla-japan/translation/wiki/Editorial-Guideline)
- [Mozilla L10n-ja 日本語の文体 - Google スプレッドシート](https://docs.google.com/spreadsheets/d/1y-hC-xMXawCgcYZwJDnvuSlAOTgMRLLyqXurpYkJbYE/edit#gid=0)
