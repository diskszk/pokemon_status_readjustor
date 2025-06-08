import { Text, VStack } from "@chakra-ui/react";

import { ContentWrapper, PolicyAndDisclaimerLayout } from "@/components/layout";

export function DisclaimerPage() {
  return (
    <PolicyAndDisclaimerLayout pageTitle="免責事項">
      <VStack gap="32px">
        <ContentWrapper title="サービスの非公式性について">
          <Text>
            本ウェブサイトは非公式のファンメイドツールであり、株式会社ポケモン、任天堂株式会社、株式会社クリーチャーズ、または株式会社ゲームフリークとは一切関係ありません。公式の情報については、公式ウェブサイトや関連資料をご参照ください。
          </Text>
        </ContentWrapper>
        <ContentWrapper title="著作権・商標権の帰属">
          <Text>
            ポケモンおよび関連する名称、キャラクター、画像、ゲームデータ、その他のコンテンツの著作権および商標権は、Nintendo/Creatures Inc./GAME FREAK inc. に帰属します。本ウェブサイトは、それらの権利を侵害する意図はありません。
          </Text>
        </ContentWrapper>
        <ContentWrapper title="提供情報の正確性について">
          <Text>
            本ツールは、ポケモンの基礎ポイント（努力値）に関する計算を簡単に行うための参考用ツールです。ただし、ゲーム内の仕様変更やデータの不正確さにより、結果が正確でない場合があります。あくまで参考としてご利用いただき、最終的な判断は自己責任で行ってください。
          </Text>
        </ContentWrapper>
        <ContentWrapper title="使用上の注意">
          <Text>
            本ツールの利用により発生したいかなる問題や損害について、当サイトの運営者は一切の責任を負いません。特に、公式のゲームプレイに影響する操作については十分ご注意ください。
          </Text>
        </ContentWrapper>
        <ContentWrapper title="免責事項の改訂について">
          <Text>
            本免責事項は予告なく変更される場合があります。最新の内容については、このページをご確認ください。
          </Text>
        </ContentWrapper>
      </VStack>
    </PolicyAndDisclaimerLayout>

  );
}
