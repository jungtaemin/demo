package com.example.kanatales_deckmaker.shared.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ResponseSharedDetail {
    private Long id;
    private String title;
    private String contents;
    private Long deckId;
    private String writer;
    private String createDate;
    private Integer views;

    private String deck_name;
    private Long card1;
    private Long card2;
    private Long card3;
    private Long card4;
    private Long card5;
    private Long card6;
    private Long card7;
    private Long card8;
    private Long card9;
    private Long card10;
    private Long card11;
    private Long card12;
    private Long card13;
    private Long card14;
    private Long card15;
    private Long card16;
    private Long card17;
    private Long card18;
    private Long card19;
    private Long card20;
    private Long card21;
    private Long card22;
    private Long card23;
    private Long card24;
    private Long card25;
    private Long card26;
    private Long card27;
    private Long card28;
    private Long card29;
    private Long card30;

    private String image1;
    private String image2;
    private String image3;
    private String image4;
    private String image5;
    private String image6;
    private String image7;
    private String image8;
    private String image9;
    private String image10;
    private String image11;
    private String image12;
    private String image13;
    private String image14;
    private String image15;
    private String image16;
    private String image17;
    private String image18;
    private String image19;
    private String image20;
    private String image21;
    private String image22;
    private String image23;
    private String image24;
    private String image25;
    private String image26;
    private String image27;
    private String image28;
    private String image29;
    private String image30;

    // 조회수 증가 로직
    public ResponseSharedDetail viewsCount(){
        this.views = this.views +1;
        return this;
    }
}
