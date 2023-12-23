# MDN 翻訳の流れ


## あらまし

こんにちは。この動画では、MDN に書かれている記事を日本語に翻訳する際の手順を紹介します。

基本的にはよくある GitHub のリポジトリーに Pull request を送るなどして貢献するときのフローと変わりません。

ただし、 Issue を送るリポジトリーと、変更を加えて Pull request を送るリポジトリー、翻訳する原文があるリポジトリー、それぞれが分かれているのでご注意ください。

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

<!--
*NOTE*:
撮影の際は撮り直しがしやすいよう、実際のリポジトリーをフォークして、リポジトリーのページをDev Toolsで書き換えて本物に見せかけた状態で撮影します。
-->

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

先ほども軽く触れたのですが、MDN の翻訳コミュニティでは、日本語の翻訳に関する Issue をやりとりする専用のリポジトリーを用意しています。

- <https://github.com/mozilla-japan/translation/>

こちらは、MDN 日本語版について、「このページが翻訳できていない」や、「このページの翻訳が間違っている」、あるいは「このページの翻訳が古い」などの問題を報告するリポジトリーです。

今回取り組む問題も、早速報告してみましょう。今回は既に確認している、ということにしますが、実際に報告する際は、既に同じ Issue が報告されていないかのチェックも忘れないようよろしくお願いします。

### 3. 実際に翻訳して、Pull requestを送る

Issue の報告ができたら、いよいよ作業開始です。mozilla-japan/translation のリポジトリーはあくまでも Issue を報告する専用のリポジトリーですので、こちらの mdn/translated-content というリポジトリーを開きます。

- <https://github.com/mdn/translated-content>

開けたら、GitHub 上で対象のファイルを開きましょう。このリポジトリーには、MDNを翻訳した文が集約されています。files/ja というディレクトリー以下に、日本語に翻訳したファイルが含まれています。今回は hoge にある index.md というファイルを編集するので、該当のファイルがある hoge/ まで辿ります。

字幕で注意書き: 撮影時点でのGitHubの画面です。多かれ少なかれ現在のものと異なる可能性があります。

対象のファイル hoge がありましたね。続いて右上の鉛筆マークをクリックして、GitHub 上のエディターを起動します。

このリポジトリーを初めて編集する場合は、次のように、リポジトリーをフォークしなければならない旨を示す画面が表示されます。指示に従って「Fork this repository」という緑色のボタンを押しましょう。

リポジトリーの Fork が終わると、そのまま GitHub 上のエディターが起動します。

今回は「hoge」をカタカナでの表記に書き換えるのがゴールなので、そのように編集します。

編集できたら、右上の「Commit changes...」という緑色のボタンをクリックしてください。

コミットメッセージを記入する画面が現れるので、コミットメッセージを書きましょう。コミットメッセージの形式について、特に明確な決まりはありませんが、慣習に従い、日本語の翻訳についての修正であることを分かりやすくするために、 `[ja]` と頭に付け加えておきます。更に、どのページをどう書き換えたか、それぞれ明確にします。今回は hoge における表記を変えたので「hoge 『hoge』を表記のルールに沿うよう『hoge』に変更」と書きます。更にコミットメッセージの詳細として、先ほど作成した Issue の URL と併せて「Fixes \<Issue の URL\>」と書いておくとよいでしょう。後で Pull request をマージした際、自動で対象の Issue をクローズすることができます。

コミットメッセージが書けたら、右下の「Propose changes」という緑色のボタンを押しましょう。

今度は変更内容を確認する画面に移ります。正しく変更できたことをチェックした上で、「Create pull request」という緑色のボタンを押してください。

あともう少しです。今度はPull requestを作成する画面に切り替わるので、Pull requestのタイトルや説明を記載してください。今回はコミットが一つだけですし、作成したコミットのコミットメッセージをコピペしてタイトルにしたり、作成した Issue の URL を description に記載すれば十分かと思います。

一通り書き終えたら「Create pull request」という緑色のボタンをクリックして、Pull request の完成です！

### 4. レビューなどへの対応

以降は、GitHub で Pull request を送ったことのある方であれば慣れた流れかも知れません。

Pull request を作成すると、自動的にレビュアーが割り当てられます。レビュアーからのフィードバックを待ちましょう。

レビュアーから修正依頼をもらったら、対応が必要です。

直す際は Pull request 画面の「Files changed」タブから修正したいファイルの名前の右側にある「・・・」と書かれた箇所をクリックし、「Edit file」をクリックすれば、先ほども使用した GitHub 上のエディターが起動します。後は編集して、先ほどと同様に「Commit changes...」という緑色のボタンを押しましょう。

修正依頼に一通り対応したら、Pull request 画面の「Conversation」タブの右側、「Reviwers」の一覧からレビュアーの名前を探して右側にある🔄「Re-request review」ボタンをクリックしてください。

レビュアーに再度レビューをするよう通知が飛びます。

レビューと修正を繰り返して、最終的に全ての問題を解決できれば、マージしてもらえるはずです。

Pull request をマージしてもらうと、最長48時間以内に加えた修正が MDN に反映されます。気長に待ちましょう。

以上が、MDN の翻訳「お手軽ルート」、誤字の修正など、簡単な修正を加えたいときにお勧めの方法です。ウェブブラウザーさえ使えればよいので、MDN の翻訳をとりあえずやってみたい！という方にも良いでしょう。

なお、Pull request を作成するときに関連づけた Issue は、マージと同時にクローズされます。自動的に閉じない場合は、自分でクローズするのを忘れないようお願いします。

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

特に翻訳する記事が決まっていない場合は、こちらからまだ翻訳されていない記事を探すと良いでしょう。

- <https://mdn.lavoscore.org/>

<!-- どの記事を選ぶかは未定 -->

今回は「hoge」という、まだ翻訳されていない記事を新たに翻訳します。

### 2. GitHub に Issue を作成する

こちらも「お手軽ルート」と同様です。特筆することもないので説明は簡単に行います。

- <https://github.com/mozilla-japan/translation/>

先ほども紹介した mozilla-japan/translation のリポジトリーに移動して、同じ Issue が報告されていないかチェックの上、Issue を報告して作業を宣言します。

### 3. 実際に翻訳して、Pull requestを送る

### 3.1 リポジトリーのフォーク・クローン

Issue の作成ができたら、作業開始です。Issue を報告したリポジトリーとは別の、 mdn/translated-content というリポジトリーを開き、フォークしましょう。

- <https://github.com/mdn/translated-content>

「お手軽ルート」の手順に従うと、自動的にフォークができているはずなので、実際のところこの手順は必要ないかも知れません。既にフォークできていればこの手順は不要です。

リポジトリーのフォークが完了したら、フォークしてできた translated-content リポジトリーを `git clone` します。

```bash
> git clone https://github.com/<あなたの GitHub ID>/translated-content
```

`git clone` してできたディレクトリーに移動したら、まずはフォーク元のリポジトリー、mdn/translated-content をリモートリポジトリーとして登録しておきましょう。

```bash
> cd translated-content
> git remote add upstream https://github.com/mdn/translated-content.git
```

ここではリモートリポジトリーの名前を `upstream` と付けていますが、もちろんお好きな名前で結構です。このようにリモートリポジトリーを設定しておけば、後で mdn/translated-content リポジトリーが更新された際、簡単に最新の状態から作業を始めることができます。詳細は次のステップで解説します。

### 3.2 作業用ブランチの作成

過去に他の Git リポジトリーで作業した経験があれば、ここですぐに `git branch` コマンドや `git switch` コマンドを実行して、作業用ブランチを作りたくなるかも知れません。しかし、作業用ブランチを確実に最新のバージョンから作るために、次のようにあらかじめ `git fetch` しておくのをお勧めします。

```bash
> git fetch upstream
> git switch -c new-branch upstream/main
```

このように `git fetch upstream` と実行することによって、`upstream`、すなわちフォーク元である mdn/translated-content の最新の変更を取り込むことができます。その上で、新しいブランチの作成元として `upstream/main` を指定すれば、`git fetch` で更新した最新のバージョンからブランチを作ることができます。

先ほどの例ではブランチの名前は `new-branch` としましたが、ブランチの名前に特に規約はないので好きな名前を付けてください。ここでは先ほど作った Issue の番号を含めて `issue-hoge` という名前にします。

```bash
> git fetch upstream
> git switch -c issue-hoge upstream/main
```

### 3.3 翻訳元のファイルをコピーして、最初のコミットを作る

今回は、「hoge」というまだ一度も日本語に翻訳されていない記事を翻訳するので、翻訳元である英語版の記事をコピーします。英語版の記事は mdn/content というリポジトリーにあるので、そちらも `git clone` します。

```bash
> git clone https://github.com/mdn/content
```

<!--
NOTE:

手順を簡略化するため、ひとまず mdn/content はフォークしないことにしました。
mdn/content 自体を修正する場合を考えればフォークした方がよいかとは思いますが、今回はあくまで翻訳の手順なので！
-->

`git clone` できたら、作成されたディレクトリーから翻訳する記事が書かれた Markdown ファイルを、対応する日本語版のディレクトリーにコピーします。

今回翻訳する `hoge` の記事の場合、 `mdn/content` リポジトリーの、こちらのディレクトリーにあります。

<!--
以下、仮に https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta/resolve を翻訳する場合のパスを用います。
-->

```
files/en-us/web/javascript/reference/operators/import.meta/resolve/index.md
```

なので、ここまでで紹介したとおりにコマンドを実行していれば、次のコマンドでコピーできるはずです。

```bash
> mkdir -p files/ja/web/javascript/reference/operators/import.meta/resolve/
> cp content/files/en-us/web/javascript/reference/operators/import.meta/resolve/index.md files/ja/web/javascript/reference/operators/import.meta/resolve/
```

コピー先のディレクトリー、files/ja/ 以下が日本語版を保存するディレクトリーです。英語版がある content/files/en-us/ 以下から、同じパスのディレクトリーを作っています。

うまく行かない場合は後ほど紹介する Slack の Workspace で相談してみてください！

英語版の記事をコピーできたら、早速日本語版の記事を開いて編集してみましょう... と言いたいところですがその前に、この時点でコピーした Markdown ファイルを `git add` してコミットしてください。

```bash
> git add files/ja/web/javascript/reference/operators/import.meta/resolve/
> git commit -m"hoge の en-us 版を ja にコピー"
```

このように予め翻訳前のファイルをコミットしておくことで、後でレビューする際に原文との比較がしやすくなります。

### 3.4 メタデータを編集して2番目のコミットを作る

続いて、前の手順でコピーしたファイルのメタデータを編集します。お好きなエディターでコピーした hoge.md を開くと、先頭に次のような内容が書かれているでしょう。

```markdown
---
title: import
slug: Web/JavaScript/Reference/Statements/import
page-type: javascript-statement
browser-compat: javascript.statements.import
---

... 以下略 ...
```

※あくまで例です。ファイルによって項目は異ります。

こちらがメタデータです。タイトル（`title`）や記事の種類（`page-type`）など、記事の内容以外のことがハイフン三つ `---` に囲われた `YAML` 形式で書かれています。

日本語版の記事では、このメタデータを次のように編集してください。

(1) `title` と `slug` 以外の項目は削除します。

```markdown
---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

... 以下略 ...
```

(2) `l10n` という項目を追加して、その中に `sourceCommit` という項目を書きます。


```markdown
---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 12345deadbeef
---

... 以下略 ...
```

`l10n`の最初の文字は小文字の l （エル）です。大文字の I と間違えないようご注意ください。`l10n` は localization の略なので覚えて奥手酔いでしょう。

`sourceCommit` に書く値は、翻訳元のファイル、つまり英語版が書かれたファイルが最後に更新されたときのコミットのIDです。例えば次のようなコマンドを使うと、簡単に調べられます。

```bash
# 英語版のリポジトリーで実行します
> cd content

> git log -1 --format="format:%H"  files/en-us/web/javascript/reference/operators/import.meta/resolve/index.md
270351317fdaa57ba9123a19aa281e9e40bb0baa
```

<!-- 実際に調べたコミットIDを sourceCommit に貼り付けるところまでスクリーンキャストで示す -->

```markdown
---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

... 以下略 ...
```

以上のように `sourceCommit` を記載しておくことで、どの時点の英語版を翻訳したのかが明確になります。翻訳元のファイルが今後更新された場合に、古くなっていることが分かりやすくするための配慮です。

ここまでできたら、再び `git commit` しておきましょう。

```bash
> git add files/ja/web/javascript/reference/operators/import.meta/resolve/
> git commit -m"hoge のメタデータを更新"
```

### 3.5 編集して段落ごとにコミットを作る

いよいよ本文の翻訳です。後でレビュアーの方がレビューしやすいよう、段落など、短いまとまりを翻訳し終える度にコミットするのをお勧めします。そうすることによって、レビュアーが Pull request に含まれる各コミットを見るだけで、どの部分をどう翻訳したかを把握できます。

<!-- 実演するスクリーンキャストも -->

#### ⚠️注意事項

なお、翻訳の際は次の点にご注意ください。

- 翻訳ソフトや対話型 AI などを利用して翻訳する場合、翻訳した文章を MDN の記事として公開することが、サービスの利用規約に違反しないようご注意ください
- 他の MDN の記事へのリンクは、日本語版のものに書き換えてください
    - 大抵の場合先頭の `/en-us/` を `/ja/` に置き換えるだけで良いです
    - 参照している翻訳記事が存在しない場合でも、英語版に自動でリダイレクトしてくれるので、参照先の有無は気にしなくて結構です
- 日本語の表記について、細かく定めたルールがあるのでそれに従って記載してください
    - 詳しくは、概要欄に記載した URL のページをご覧ください

### 3.6 編集中の内容をプレビューする

さて、編集している間、自分が翻訳したページが MDN のウェブサイト上でどのように表示されるかすぐに確認できると便利でしょう。MDN では標準の Markdown にはない、固有の構文が使用されているため、それが正しく書けているか気になる、なんてケースもあるかも知れません。

そんなときは Yari というアプリケーションを使いましょう。Yari は、MDN にあるドキュメントを配信するアプリケーションです。MDN の本番環境でも使用されているので、手元にインストールすれば、実際の MDN とほぼ同じ環境を再現することができます。

Yari は Node.js で書かれているので、利用する場合は Node.js をインストールしておいてください。また、インストールの際 Yarn を用いるので、そちらも忘れないようお願いします。

いずれもインストールできたら、まずは英語版があるリポジトリーに `cd` した上で、`yarn install`してください。

```bash
> cd content
> yarn install
```

インストールには少し時間が掛かります。待ちましょう。もしうまく行かなかった場合は、概要欄に書いた Slack Workspace などでご相談ください。

それから、同じく英語版があるリポジトリーに、`.env` という名前のファイルを作成してください。`.env` では次のように書くことで、Yari の実行時に `CONTENT_TRANSLATED_ROOT` という環境変数が設定されるようにします。

```env
# translated-content と content を同じディレクトリーに clone した場合
CONTENT_TRANSLATED_ROOT=../translated-content/files
```

環境変数 `CONTENT_TRANSLATED_ROOT` は、翻訳済みの記事を含むディレクトリーのパスです。プレビューの際、日本語版をはじめ英語版以外の記事を表示する際使用します。

例えば `content` と `translated-content` を同じディレクトリーに clone している場合、例の通り設定してください。

ここまでできたら、`yarn start` で Yari を起動してみましょう。

```bash
> yarn start
```

起動できたら、ブラウザーで http://localhost:5042 という URL にアクセスしてみてください。Yari が起動できていれば、画面のようなページが表示されるはずです。

<!-- スクリーンキャスト -->

うまく行かない場合は、概要欄に書いた Slack Workspace などでご相談ください。

右上の検索ボックスなどを利用して、プレビューしたいページを探してみてください。基本的な使い方は、MDN のウェブサイトと変わりません。

<!-- スクリーンキャスト -->

プレビューしたいページを表示できたら、翻訳中のファイルを編集して、保存してみてください。自動でプレビューにも反映されるはずです。

### 3.7 Pull request を送る

後はこれまで説明した手順に従って、どんどん翻訳していきましょう。一通りの段落を翻訳・コミットしたら、`git push -u` して、変更を push します。

```bash
git push -u
```

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
