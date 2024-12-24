import { Box, Flex, Heading, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

import { EMAIL_ADDRESS } from "@/features/constants";

function PolicyItem({ title, text }: { title: string; text: string }) {
  return (
    <Box width="100%">
      <Heading
        as="h3"
        justifyContent="start"
        mb="8px"
        mt="16px"
        size="md"
      >
        {title}
      </Heading>
      <Text
        textAlign="left"
      >
        {text}
      </Text>
    </Box>
  );
}

function PolicyList({ textList, title }: { textList: string[]; title: string }) {
  return (
    <Box width="100%">
      <Heading
        as="h3"
        justifyContent="start"
        mb="8px"
        mt="16px"
        size="md"
      >
        {title}
      </Heading>
      <UnorderedList>
        {textList.map((text, key) => (
          <ListItem key={key}>
            <Text
              textAlign="left"
            >
              {text}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export function PolicyPage() {
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
        ポリシー
      </Heading>
      <VStack gap="32px">
        <PolicyItem
          text="本ウェブサイトは、ポケモンゲームにおける基礎ポイント（努力値）の計算を簡便化し、プレイヤーが効率的にゲームを楽しむための非公式ツールを提供することを目的としています。"
          title="サービスの目的"
        />
        <PolicyList
          textList={[
            "本ウェブサイトでは、ポケモンに関連する情報を引用する際に著作権法の「引用の範囲」を遵守しています。",
            "著作権者からの削除要請があった場合、速やかに対応いたします。",
          ]}
          title="著作権に関する取り扱い"
        />
        <PolicyList
          textList={[
            "本ウェブサイトで提供されるツールおよび情報は、個人利用を目的としています。",
            "商業目的や再配布を禁止します。",
            "計算結果の使用は自己責任で行ってください。",
          ]}
          title="ユーザーの責任"
        />
        <PolicyItem
          text="このサービスでは、利用者の個人情報（氏名、住所、連絡先、その他個人を特定できる情報）を収集・保存していません。また、外部サービスや解析ツールによる情報収集も行っておりません。"
          title="プライバシーポリシー"
        />
        <Box width="100%">
          <Heading
            as="h3"
            mb="8px"
            mt="16px"
            size="md"
          >
            禁止事項
          </Heading>
          <Text>
            本ウェブサイトの利用にあたり、以下の行為を禁止します：
          </Text>
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
        </Box>
        <Box width="100%">
          <Heading
            as="h3"
            justifyContent="start"
            mb="8px"
            mt="16px"
            size="md"
          >
            問い合わせ先
          </Heading>
          <Text
            textAlign="left"
          >
            本ウェブサイトに関するお問い合わせは、以下の連絡先までお願いします。
            <Text>
              {"Email: "}
              <Link href={`mailto:${EMAIL_ADDRESS}`}>
                {EMAIL_ADDRESS}
              </Link>
            </Text>
          </Text>
        </Box>
        <PolicyItem
          text="本ポリシーは予告なく変更される場合があります。最新の内容については、このページをご確認ください。"
          title="ポリシーの改訂について"
        />
      </VStack>
    </Flex>
  );
}
