const trackData = {
    // 싱글들 추가
    'album5': [{ id: 'MeJzAwzUmtM', title: '언니', lyrics: `소녀들은 바닷가에\n신발 벗어둔 채 파도 말에 취해가네\n뻘에는 가지 말자는\n말 한마디에 약속한 듯 맞장구\n\n잊는 춤이야\n잃을 줄이야\n가는 중이야\n못 닿을 뿐이야\n\n마침표를 찍지 못한 문장은\n어느새 남아 시가 되었나\n배 타고 가면 어쩌면 길을\n잃을 수 있을지도 모를까\n\n다음은 어디야\n나는 너희야\n우린 땅이야\n곧 트는 동이야` }],
    'album3': [{ id: 'Y7YLA39Nx7M', title: '불균형', lyrics: `당신께 주려고 내가 산 꽃은\n당신에게 가는 길에 시들어버렸어\n그늘을 찾아가는 길에\n야속한 저 타는 해는 저물어버렸어\n당신을 웃게 할 수 있는 것을\n찾아만 다닐 때\n혼자된 당신은 식은 이별을\n손으로 덥히네\n당신과 내가 보는 노을은\n수평선 위에 걸려 일렁이었어\n넌 눈에 그 순간을 담고\n조급한 난 이미 잠긴 반만 보았어\n당신을 웃게 할 수 있는 것을\n찾아만 다닐 때\n혼자된 당신은 식은 이별을\n손으로 덥히네` }],
    'album1': [{ id: 'hZobKyyxOOo', title: "Surfer's High", lyrics: `Summer breeze kisses my neck\nThe ocean wave is making me feel like to surf\nWith a board on me I jump into the ocean\nSuddenly a friend of mine shout out to me say\nA shark is around\nWave is on high\nMy blood pressure high\nGotta catch the wave to be alive\nNow I'm feeling so alive\nLate that night we went to club\nA friend was away\nI heard a fight so went to watch\nWith a bitch on me I walked over the fight scene\nSuddenly I realized a familiar face\nMy friend's on the ground\nFully jumped on\nMy blood pressure high\nGotta fight to keep my friend alive\nNow I'm feeling so alive` }],
    
    // 기존 EP 앨범들
    'album6': [
        { id: 'AVhv_xvxGCs', title: 'Intro', lyrics: `초라한 나의 집\n부서진 조각들\n연약한 청소부\n쉬어 갈 탕비실\n내 발에 키스를\n따뜻한 홍차를\n눈물이 마르면\n뜨거운 담배를` },
        { id: 'q7IPVW3u75U', title: '꽃', lyrics: `어리고 예쁜 꽃이 피어서\n나비와 벌과 흙을 사귀었고\n얕은 뿌리에 비가 내릴 때\n첫 번째 밤이 찾아왔네\n\n나비는 어디에\n벌들은 어디에\n흙이 물러지네\n버티고 버티네\n\n형제들의 끊어지는 숨에\n무던해지고 단단해져 갈 때\n사랑을 하고 눈을 떴을 때\n홀로 열매란 종말을 배었네\n\n빗물에 씻겨버린 꽃가루\n연하디 연한 허무함\n\n햇빛은 뜨겁게\n난 더 말라가네\n영원의 찰나인\n계절이 지나가네` },
        { id: 'mlg8fAviQp8', title: '잔디', lyrics: `참아\n넌 선택을 존중받았던\n소년이었고 난 아비였어\n붉어지는 눈시울 뒤돌아선 건\n두려워져서 당연했었어\n\n아빠\n눈이 패인 저 녀석들은\n놀이였고 난 전쟁이었어\n붉어진 내 눈을 쳐다보지 마\n남들 몰래 이미 훔쳤으니까\n\n저는 나중에 커서 훌륭한 사람이 될 거예요\n너는 나중에 커서 훌륭한 사람이 될 거란다\n나는 나중을 보고 우물 안 사람이 되었나요\n너는 나중을 보고 우울한 사람이 되지 마라\n\n(You do anything but that)\nYou do anything but that\nCan't do anything but that\nYou do anything but that\nI do nothing but that\n\nNow what!` },
        { id: '7hAH-4XWTvY', title: '언니', lyrics: `소녀들은 바닷가에\n신발 벗어둔 채 파도 말에 취해가네\n뻘에는 가지 말자는\n말 한마디에 약속한 듯 맞장구\n\n잊는 춤이야\n잃을 줄이야\n가는 중이야\n못 닿을 뿐이야\n\n마침표를 찍지 못한 문장은\n어새 남아 시가 되었나\n배 타고 가면 어쩌면 길을\n잃을 수 있을지도 모를까\n\n다음은 어디야\n나는 너희야\n우린 땅이야\n곧 트는 동이야` },
        { id: 'rHimHRSNcvo', title: '모래알', lyrics: `나의 눈의 뒤에\n괴물을 너무 오래 본 건지\n\n내가 내 눈 앞에 있다고\n믿어온 시간이 긴 건지\n\n깨진 유리알\n애초에 뭉칠 수 없던\n모래알\n머쓱해진 보석상\n남은 건 있지도 않았던\n비겁한\n너와 나\n\n푸른 봄 계절을 멈추는\n주문은 낙서가 되어서\n오르는 아지랑이를 보며\n빠진 문장 타면서 우네\n\n울지 말아라\n내 문장들아\n\n울지 말아라\n나의 꿈들아\n\n울지 말아라\n나의 것들아\n\n울지 말아라\n나의 아들아` }
    ],
    'album4': [
        { id: 'qccfzgN_fqo', title: '이방인', lyrics: `빈 눈으로 노래를 불러\n흰 얼굴을 보면서\n네가 그의 이름을 불러\n그를 향한 노래를 부르는\n나는\n그의 그림자 안에서\n예쁜 너만 봐\n어느새 너를 찾아\n그 사람에게 가는 게 이미 내 일상인 걸\n기타를 멘 내가 멋지지 않니\n한 번쯤은 내 노랫말에\n너무 집중하지 말아줘\n감은 눈을 떠\n그의 생일날 함께\n그의 집에 가자고 하네\n어차피 나는 그날의\n악사인걸\n아멘` },
        { id: 'LbEms0LvPPg', title: '하루방', lyrics: `아무도 믿지 않는 건\n내가 아는 걸 아무도 모르기 때문이야\n아무도 모르는 건\n내가 본 것을 아무도 못 봤기 때문이야\n아무도 못 보는 건\n내가 듣는 걸 아무도 못 듣기 때문이야\n아무도 못 듣는 건\n내가 아는 걸 아무도 모르기 때문이야\n파도가 말했어\n오늘 밤 나의 집에서\n마귀들이 모여서\n파티를 한다고\n그게 중요한 게 아니야\n그게 중요한 게 아니야\n내가 바보 같니 아마\n나는 너무 많이 알아서\n파도가 말했어\n오늘 밤 나의 집에서\n마귀들이 모여서\n파티를 한다고` },
        { id: 'PImRFmtnPhA', title: '불균형', lyrics: `당신께 주려고 내가 산 꽃은\n당신에게 가는 길에 시들어버렸어\n그늘을 찾아가는 길에\n야속한 저 타는 해는 저물어버렸어\n당신을 웃게 할 수 있는 것을\n찾아만 다닐 때\n혼자된 당신은 식은 이별을\n손으로 덥히네\n당신과 내가 보는 노을은\n수평선 위에 걸려 일렁이었어\n넌 눈에 그 순간을 담고\n조급한 난 이미 잠긴 반만 보았어\n당신을 웃게 할 수 있는 것을\n찾아만 다닐 때\n혼자된 당신은 식은 이별을\n손으로 덥히네` },
        { id: 'LRkIJjx8NiY', title: 'Pond Scum', lyrics: `잠시 삐끗한 탓에 주저앉았네\n이렇게는 살 수 없을 것 같은데\n누울 곳과 빵을 줘 쉬긴 쉬는데\n내일 아침 눈을 뜨면 돌아가야지\n오늘 난 이빨이 빠졌네\n오늘 난 이빨이 빠졌네\n그럭저럭 오늘도 떠지긴 한 눈으로 보니\n주저앉은 게 비단 나만 아닌데\n이렇게도 살아는 가지는 걸 보면\n찌뿌둥하지만 뭐 나쁘진 않네\n오늘 난 두 눈이 멀었네\n오늘 난 발목이 잘렸네\n앉은뱅이 친구들이 배를 채우네\n앉은뱅이 친구들이 술을 마시네\n앉은뱅이 친구들이 나를 깨우네\n내일은 나 눈을 뜨지 않길 바라네\n오늘 난 영원히 잠들어\n오늘 난 영원히 잠들어\n버리네` },
        { id: 'q9KVKkiA5zc', title: '배수', lyrics: `세면대에 물을 틀어 놓고\n잡아보려 했는데\n잡히지 않아서 수도꼭지를\n하릴없이 잠갔네\n물 잠그고 세수를 하는데\n세수가 될 리 없어\n비누만 치덕치덕 해놓고\n멍청하게 서있네\n물을 틀면 물이 빠져버릴 텐데\n아까운 물\n물 부족 국가라서 아껴야 할 텐데\n아까운 물\n치덕치덕 해놓은 비누가\n말라붙어버려서\n이게 뭐 하는 짓인가 싶어\n수도꼭질 열었네\n흘러가게 두었네` }
    ],
    'album2': [
        { id: 'VCKuDWuP42w', title: '도둑들', lyrics: `책임감을 태워서 몸을 덥히는 연인들\n젊음을 태워서 눈이 먼 듯한 사랑을\n불 뒤에 뭐가 있을지는 보지 않기로 해\n오토바이 뒤에서 헬멧은 꼭 쓰기로 해\n니 이름을 부르면\n너는 나를 보고\n내 불안감을 보고\n난 다시 불을 놓고\n술 사러 나가면\n사람들을 보고\n퇴근길을 보고\n또 출근길을 보는데\n니 배를 누르면\n니가 나를 보고\n웃으며 깨물던\n볼도 처져만 가고\n너의 그 웃음도\n내 젊은 얼굴도\n흐릿해지지만\n아직 엊그제는 같은데` },
        { id: 'IvWCO2fxZjE', title: 'Bloody Mary', lyrics: `녹아내린 촛농을 주워 담았던\n너의 데인 손을 난 잡아주겠어\n무너지는 나무여 쓰러져 누울\n낙엽 깔린 자리가 되어주겠어\n나를 팔아 넌 주사기를 샀고\n너를 팔아 난 우리 미래를 샀어\n주사기에 채워진 미래를 꽂고\n우린 시한부의 행복을 뱄어\n오늘 밤 차를 훔쳐 타겠니\n밀린 빨래를 버리고 우리\n매일같이 치는 도망이\n꿈이 아니면 어떨 거 같니\n아무도 모르는 밤에 떠나가자\n손에 움켜쥔 게 무언지 열어 봐봐\n비어 있는 것을 정말 몰랐나\n저당 잡힌 것을 내려놓아 볼까\n텅 빈 눈으로 춤을 추지 마세요\n내 손 잡은 그 손에 힘을 주세요\n나랑 같이 도망가 나를 믿어요\n엄마 집에 간다는 말은 마세요\n믿어요 믿어요` },
        { id: 'jaHmnmuSU-o', title: 'Confidence Game', lyrics: `우린 너희 아버지의 차를 훔쳐 달아나\n밤하늘의 별이 비추는 방향으로 가\n우리 뒤는 보지 말자 했지만\n발자국을 남기던 너를 모른척한 건 나였어\n니 아버지 차를 훔쳐 탔지만\n무면허로 달리던 나를 모른척한 건 너였어\n우린 너희 아버지의 차를 훔쳐 달아나\n우리 미래의 외상값을 모두 내 이름에 달아 놔\n함께 도망가자 약속한 게 아니었나\n혼자 도망가는 손만 잡아준 너였나\n날 던진 계절은 겨울을 준비한 거였나` }
    ]
};
