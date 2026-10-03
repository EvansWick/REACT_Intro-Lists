import styles from "./ContentSection.module.css";
import SuscribeBtn from "../SubscribeBtn";

function ContentSection({ userData, functions }) {
  const { firstName, lastName, nickname, imgSrc, isOnline } = userData;
  return (
    <section className={styles.contentSection}>
      <UserPhoto userPhotoSrc={imgSrc} isOnline={isOnline}></UserPhoto>
      <div className={styles.nameSection}>
        <p title={firstName + " " + lastName} className={styles.userName}>
          {firstName + " " + lastName}
        </p>
        <span className={styles.userNick}>{nickname}</span>
      </div>
      {/* Коли стан батька змінюється, React не створює об'єкти дочірніх класів заново, 
      а просто викликає їхній метод render() з новими значеннями в this.props. 
      Якщо всередині читати this.state, 
      компонент залишається "сліпим" до будь-яких зовнішніх змін. */}
      <UserStatistic userData={userData}></UserStatistic>
      <UserActionPanel
        functions={functions}
        userData={userData}
      ></UserActionPanel>
    </section>
  );
}

export default ContentSection;

function UserPhoto({ userPhotoSrc, isOnline }) {
  return (
    <div className={styles.userPhotoContainer}>
      <img className={styles.userPhoto} src={userPhotoSrc} alt="userPhoto" />

      {isOnline && (
        <div className={styles.onlineStatusContainer}>
          <div className={styles.onlineStatus}></div>
        </div>
      )}
    </div>
  );
}

function UserStatistic({ userData }) {
  return (
    <div className={styles.fullPanelContainer}>
      <div className={styles.panelItemContainer}>
        {/* first pannel item */}
        <div className={styles.panelItem}>
          <span className={styles.panelItemCategory}>Лайків</span>
          <span className={styles.panelItemCategoryValue}>
            {userData.stats.likes}
          </span>
        </div>
        {/* second pannel item */}
        <div className={styles.panelItem}>
          <span className={styles.panelItemCategory}>Підписників</span>
          <span className={styles.panelItemCategoryValue}>
            {userData.stats.followers}
          </span>
        </div>
        {/* third pannel item */}
        <div className={styles.panelItem}>
          <span className={styles.panelItemCategory}>Постів</span>
          <span className={styles.panelItemCategoryValue}>
            {userData.stats.posts}
          </span>
        </div>
      </div>
    </div>
  );
}

function LikeBtn({ config: { filled, size, color, isLiked }, functions, uId }) {
  return (
    <button
      onClick={
        isLiked
          ? (e) => {
              e.stopPropagation();

              return functions["removeLike"](uId);
            }
          : (e) => {
              e.stopPropagation();

              return functions["addLike"](uId);
            }
      }
      className={styles.likeBtn}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={isLiked ? color : "none"}
        stroke={color}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </button>
  );
}

function UserActionPanel({ userData, functions }) {
  return (
    <div className={styles.actionPanelConteiner}>
      <div className={styles.subLikeContainer}>
        <SuscribeBtn
          userId={userData.id}
          functions={{
            addSubscriber: functions["addSubscriber"],
            removeSubscriber: functions["removeSubscriber"],
          }}
        ></SuscribeBtn>
        <LikeBtn
          functions={{
            addLike: functions["addLike"],
            removeLike: functions["removeLike"],
          }}
          uId={userData.id}
          config={{
            filled: false,
            size: "1rem",
            color: "white",
            isLiked: userData.isLiked,
          }}
        ></LikeBtn>
      </div>
      <button
        className={styles.trashBtn}
        onClick={(e) => {
          e.preventDefault();
          functions["removeItem"](userData.id);
        }}
      >
        Видалити
      </button>
    </div>
  );
}
