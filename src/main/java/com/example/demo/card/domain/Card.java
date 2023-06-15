package com.example.demo.card.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Card {
    /** 카나테일즈 카드 데이터 Domain */


    private Long id;
    private String name;

    /** 카드 사이즈 */
    private int size;

    /** 카드 능력치 - 공/방/체 */
    private int atk;
    private int def;
    private int hp;

    /** 카드 효과 - 턴개시시/공격전/방어전  */
    private String effect;

    /** 카드 태그 타입 2개까지  ex) 기사단,플리나 */
    private String tag1;
    private String tag2;
    
    /** 카드 종류 - 캐릭터/스펠/추종자 */
    private CardType cardType;
    
    /** 카드 레어도 */
    private RarityType rarityType;
    /** 이미지 경로 */
    private String image;


    /** 만약 사용자가 카드 등록을 할경우.. 기본적으로는 사이트 자체 db로 카드데이터를 가져올예정이라 미사용 */
    private String createDate;
    private String updateDate;
}
