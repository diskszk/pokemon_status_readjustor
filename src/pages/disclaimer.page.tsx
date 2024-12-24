import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

function DisclaimerItem({ title, text }: { title: string; text: string }) {
  return (
    <Box>
      <Heading
        as="h3"
        justifyContent="start"
        mb="8px"
        mt="16px"
        size="md"
      >
        {title}
      </Heading>
      <Text textAlign="left">
        {text}
      </Text>
    </Box>
  );
}

export function DisclaimerPage() {
  return (
    <Flex
      direction="column"
      width="50%"
    >
      <Heading
        as="h2"
        mb="32px"
        mt="16px"
        size="lg"
        textAlign="center"
      >
        免責事項
      </Heading>
      <VStack gap="32px">
        <DisclaimerItem
          text="本ウェブサイトは非公式のファンメイドツールであり、株式会社ポケモン、任天堂株式会社、株式会社クリーチャーズ、または株式会社ゲームフリークとは一切関係ありません。公式の情報については、公式ウェブサイトや関連資料をご参照ください。"
          title="サービスの非公式性について"
        />
        <DisclaimerItem
          text="ポケモンおよび関連する名称、キャラクター、画像、ゲームデータ、その他のコンテンツの著作権および商標権は、Nintendo/Creatures Inc./GAME FREAK inc. に帰属します。本ウェブサイトは、それらの権利を侵害する意図はありません。"
          title="著作権・商標権の帰属"
        />
        <DisclaimerItem
          text="本ツールは、ポケモンの基礎ポイント（努力値）に関する計算を簡単に行うための参考用ツールです。ただし、ゲーム内の仕様変更やデータの不正確さにより、結果が正確でない場合があります。あくまで参考としてご利用いただき、最終的な判断は自己責任で行ってください。"
          title="提供情報の正確性について"
        />
        <DisclaimerItem
          text="本ツールの利用により発生したいかなる問題や損害について、当サイトの運営者は一切の責任を負いません。特に、公式のゲームプレイに影響する操作については十分ご注意ください。"
          title="使用上の注意"
        />
        <DisclaimerItem
          text="本免責事項は予告なく変更される場合があります。最新の内容については、このページをご確認ください。"
          title="免責事項の改訂について"
        />
      </VStack>
    </Flex>
  );
}
