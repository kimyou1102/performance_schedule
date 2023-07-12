import React from "react";
import {
  ArtistUl,
  ArtistLi,
  ArtistNameWrap,
  ArtistNameText,
  ArtistColor,
  DeleteBtn,
  CalendarMoveBtn,
  CalendarPageText,
} from "../../styledComponents";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteArtistApi } from "../../api/artist/delete-artist-api";

const MusicianList = ({ artists }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const artistDeleteClick = async (e) => {
    const id = Number(e.target.closest("li").id);
    if (window.confirm("삭제하시겠습니까?")) {
      await deleteArtistApi(id)
        .then((res) => {
          dispatch({
            type: "DELETE_ARTIST",
            payload: id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      alert("삭제되었습니다.");
    } else {
      alert("취소되었습니다.");
    }
  };
  return (
    <>
      <ArtistUl>
        {artists.map((artist, index) => (
          <ArtistLi key={index} id={artist.id}>
            <ArtistNameWrap>
              <ArtistColor color={artist.color} />
              <ArtistNameText>{artist.name}</ArtistNameText>
            </ArtistNameWrap>
            <DeleteBtn onClick={artistDeleteClick}>삭제</DeleteBtn>
          </ArtistLi>
        ))}
      </ArtistUl>
      <CalendarMoveBtn onClick={() => navigate("calendar")}>
        <CalendarPageText>공연예매 달력 보러 가기</CalendarPageText>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          style={{ fontSize: "18px", color: "white" }}
        />
      </CalendarMoveBtn>
    </>
  );
};

export default MusicianList;
