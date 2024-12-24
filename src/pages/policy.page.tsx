import { Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

import { ContentWrapper, PolicyAndDisclaimerLayout } from "@/components/layout";
import { EMAIL_ADDRESS } from "@/features/constants";

export function PolicyPage() {
  return (
    <PolicyAndDisclaimerLayout pageTitle="ポリシー">
      <VStack gap="32px">
        <ContentWrapper title="サービスの目的">
          <Text>
            本ウェブサイトは、ポケモンゲームにおける基礎ポイント（努力値）の計算を簡便化し、プレイヤーが効率的にゲームを楽しむための非公式ツールを提供することを目的としています。
          </Text>
        </ContentWrapper>
        <ContentWrapper title="著作権に関する取り扱い">
          <UnorderedList>
            <ListItem>
              本ウェブサイトでは、ポケモンに関連する情報を引用する際に著作権法の「引用の範囲」を遵守しています。
            </ListItem>
            <ListItem>
              著作権者からの削除要請があった場合、速やかに対応いたします。
            </ListItem>
          </UnorderedList>
        </ContentWrapper>
        <ContentWrapper title="ユーザーの責任">
          <UnorderedList>
            <ListItem>
              本ウェブサイトで提供されるツールおよび情報は、個人利用を目的としています。
            </ListItem>
            <ListItem>
              商業目的や再配布を禁止します。
            </ListItem>
            <ListItem>
              計算結果の使用は自己責任で行ってください。
            </ListItem>
          </UnorderedList>
        </ContentWrapper>
        <ContentWrapper title="プライバシーポリシー">
          <Text>
            このサービスでは、利用者の個人情報（氏名、住所、連絡先、その他個人を特定できる情報）を収集・保存していません。また、外部サービスや解析ツールによる情報収集も行っておりません。
          </Text>
        </ContentWrapper>
        <ContentWrapper title="禁止事項">
          <Text>本ウェブサイトの利用にあたり、以下の行為を禁止します: </Text>
          <UnorderedList>
            <ListItem>
              サイトの内容を無断でコピー、改変、または再配布する行為
            </ListItem>
            <ListItem>
              サービスを妨害する行為や、不正利用を目的とする行為
            </ListItem>
            <ListItem>
              公序良俗に反する行為や法令違反となる行為
            </ListItem>
          </UnorderedList>
        </ContentWrapper>
        <ContentWrapper title="問い合わせ先">
          <Text>
            本ウェブサイトに関するお問い合わせは、以下の連絡先までお願いします。
          </Text>
          <Text>
            {"Email: "}
            <Link
              href={`mailto:${EMAIL_ADDRESS}`}
              textDecoration="underline"
            >
              {EMAIL_ADDRESS}
            </Link>
          </Text>
        </ContentWrapper>
        <ContentWrapper title="ポリシーの改訂について">
          <Text>
            本ポリシーは予告なく変更される場合があります。最新の内容については、このページをご確認ください。
          </Text>
        </ContentWrapper>
      </VStack>
    </PolicyAndDisclaimerLayout>
  );
}
