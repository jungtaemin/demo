package com.example.kanatales_deckmaker.common.dto;

import com.example.kanatales_deckmaker.card.domain.Card;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
// 카드데이터용 페이징
@Getter
@Builder
public class CardPageDto<T> extends PageDto<T>{
    /** 범용성있는 page정보 생성 dto **/

    public CardPageDto() {
        setPageLimit(5);
        setBlockLimit(5);
    }
}
