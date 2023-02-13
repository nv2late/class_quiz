import {
  Container,
  Header,
  HeaderIcon,
  HeaderInfo,
  HeaderInfoProfile,
  HeaderNav,
  Line,
  ListSection,
  Lists,
  ListsItem,
  ListNum,
  FaqTitle,
  NavBar,
  NavLists,
  NavListItem,
} from '../../styles/01';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faHeart,
  faHouse,
  faLocation,
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default function MyPage() {
  return (
    <Container>
      {/* 헤더영역 */}
      <Header>
        <HeaderIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </HeaderIcon>
        <HeaderInfo>
          <h1>마이</h1>
          <HeaderInfoProfile>
            <img src="/profile.png" alt="Profile Picture" />
            <span>Emet-Selch</span>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: 'gray' }} size="lg" />
          </HeaderInfoProfile>
        </HeaderInfo>
        <HeaderNav>
          <h3>
            <a href="">공지사항</a>
          </h3>
          <h3>
            <a href="">이벤트</a>
          </h3>
          <h3 className="colored">
            <a href="">FAQ</a>
          </h3>
          <h3>
            <a href="">Q&A</a>
          </h3>
        </HeaderNav>
      </Header>
      <Line />

      {/* 리스트 */}
      <ListSection>
        <Lists>
          <ListsItem>
            <a href="">
              <div>
                <ListNum>Q. 01</ListNum>
                <FaqTitle>리뷰 작성은 어떻게 하나요?</FaqTitle>
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} size="lg" />
            </a>
          </ListsItem>

          <ListsItem>
            <a href="">
              <div>
                <ListNum>Q. 02</ListNum>
                <FaqTitle>리뷰 수정/삭제는 어떻게 하나요?</FaqTitle>
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} size="lg" />
            </a>
          </ListsItem>

          <ListsItem>
            <a href="">
              <div>
                <ListNum>Q. 03</ListNum>
                <FaqTitle>아이디/비밀번호를 잊어버렸어요!</FaqTitle>
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} size="lg" />
            </a>
          </ListsItem>

          <ListsItem>
            <a href="">
              <div>
                <ListNum>Q. 04</ListNum>
                <FaqTitle>회원탈퇴를 하고 싶어요.</FaqTitle>
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} size="lg" />
            </a>
          </ListsItem>

          <ListsItem>
            <a href="">
              <div>
                <ListNum>Q. 05</ListNum>
                <FaqTitle>출발지 설정은 어떻게 하나요?</FaqTitle>
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} size="lg" />
            </a>
          </ListsItem>

          <ListsItem>
            <a href="">
              <div>
                <ListNum>Q. 06</ListNum>
                <FaqTitle>비밀번호를 변경하고 싶어요</FaqTitle>
              </div>
              <FontAwesomeIcon icon={faChevronDown} style={{ color: 'gray' }} size="lg" />
            </a>
          </ListsItem>
        </Lists>
      </ListSection>

      {/* 네비게이션 */}
      <NavBar>
        <NavLists>
          <NavListItem>
            <a href="">
              <FontAwesomeIcon icon={faHouse} size="2x" />
              <span>홈</span>
            </a>
          </NavListItem>

          <NavListItem>
            <a href="">
              <FontAwesomeIcon icon={faLocationDot} size="2x" />
              <span>잇츠로드</span>
            </a>
          </NavListItem>

          <NavListItem>
            <a href="">
              <FontAwesomeIcon icon={faHeart} size="2x" />
              <span>마이찜</span>
            </a>
          </NavListItem>

          <NavListItem>
            <a href="">
              <FontAwesomeIcon icon={faUser} size="2x" />
              <span>마이</span>
            </a>
          </NavListItem>
        </NavLists>
      </NavBar>
    </Container>
  );
}
