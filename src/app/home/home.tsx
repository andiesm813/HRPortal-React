import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrList, IgrListItem, IgrListModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import styles from './home.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrListModule.register();
IgrRippleModule.register();

export default function Home() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("column-layout home-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout group")}>
              <span className={classes("material-icons icon")}>
                <span key={uuid()}>home</span>
              </span>
              <h4 className={classes("h4")}>
                <span>Home</span>
              </h4>
            </div>
          </div>
          <div className={classes("row-layout content")}>
            <div className={classes("row-layout group_1")}>
              <div className={classes("column-layout group_2")}>
                <div className={classes("row-layout group_3")}>
                  <IgrAvatar src="/src/assets/Avatar6.png" size="medium" shape="circle" className={classes("avatar")}></IgrAvatar>
                  <div className={classes("column-layout group_4")}>
                    <h5 className={classes("content_1")}>
                      <span>Erin Brockovich</span>
                    </h5>
                    <p className={classes("typography__body-1 content_1")}>
                      <span>Water quality specialist</span>
                    </p>
                  </div>
                </div>
                <div className={classes("column-layout group_5")}>
                  <div className={classes("row-layout group_6")}>
                    <div className={classes("column-layout group_7")}>
                      <p className={classes("typography__subtitle-2 text")}>
                        <span>Open PTO</span>
                      </p>
                      <span className={classes("material-icons icon_1")}>
                        <span key={uuid()}>date_range</span>
                      </span>
                      <p className={classes("typography__body-2 text_1")}>
                        <span>8.5 days used (YTD)</span>
                      </p>
                      <p className={classes("typography__caption text_1")}>
                        <span>1 day scheduled</span>
                      </p>
                    </div>
                    <div className={classes("column-layout group_8")}>
                      <p className={classes("typography__subtitle-2 text")}>
                        <span>Bereavement leave</span>
                      </p>
                      <div className={classes("row-layout group_9")}>
                        <h6 className={classes("content_2")}>
                          <span>0.0</span>
                        </h6>
                        <span className={classes("material-icons icon_2")}>
                          <span key={uuid()}>date_range</span>
                        </span>
                      </div>
                      <p className={classes("typography__body-2 text_1")}>
                        <span>Days available</span>
                      </p>
                      <p className={classes("typography__caption text_1")}>
                        <span>0 day scheduled</span>
                      </p>
                    </div>
                  </div>
                  <div className={classes("row-layout group_10")}>
                    <IgrButton size="large" className={classes("button")}>
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>send</span>
                      </span>
                      <span key={uuid()}>Request time off</span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrButton>
                    <IgrIconButton variant="flat" className={classes("icon-button")}>
                      <span className={classes("material-icons icon_3")} key={uuid()}>
                        <span key={uuid()}>email</span>
                      </span>
                      <IgrRipple key={uuid()}></IgrRipple>
                    </IgrIconButton>
                  </div>
                </div>
                <div className={classes("column-layout group_11")}>
                  <p className={classes("typography__subtitle-2 text_2")}>
                    <span>What's the buzz</span>
                  </p>
                  <div className={classes("column-layout list_scroll")}>
                    <IgrList className={classes("list")}>
                      <IgrListItem key={uuid()}>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/Avatar3.png" shape="circle" className={classes("avatar_1")}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Ethan Hunt</div>
                        <div slot="subtitle" key={uuid()}>Birthday, Oct 1</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>cake</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/Avatar5.png" shape="circle" className={classes("avatar_2")}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Luke Skywalker</div>
                        <div slot="subtitle" key={uuid()}>25th work-anniversary</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>flag</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/Avatar1.png" shape="circle" className={classes("avatar_3")}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Donnie Darko</div>
                        <div slot="subtitle" key={uuid()}>On vacation, Oct 10-23</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>beach_access</span>
                        </span>
                      </IgrListItem>
                      <IgrListItem key={uuid()}>
                        <div style={{display: 'contents'}} slot="start" key={uuid()}>
                          <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_4")}></IgrAvatar>
                        </div>
                        <div slot="title" key={uuid()}>Edna Mode</div>
                        <div slot="subtitle" key={uuid()}>Visiting customer</div>
                        <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                          <span key={uuid()}>airplanemode_active</span>
                        </span>
                      </IgrListItem>
                    </IgrList>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_12")}>
                <div className={classes("column-layout group_13")}>
                  <div className={classes("row-layout group_14")}>
                    <p className={classes("typography__subtitle-2 text_3")}>
                      <span>What's happening at Rapid Fission Inc.</span>
                    </p>
                    <p className={classes("typography__subtitle-2 text_3")}>
                      <span>Announcements (1)</span>
                    </p>
                  </div>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar src="/src/assets/Avatar4.png" shape="circle" className={classes("avatar_5")}></IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>George Bailey posted  an announcement, awards, and call for nominations</div>
                      <div slot="subtitle" key={uuid()}>19 days ago</div>
                      <span slot="end" className={classes("material-icons icon_4")} key={uuid()}>
                        <span key={uuid()}>clear</span>
                      </span>
                    </IgrListItem>
                  </IgrList>
                </div>
                <div className={classes("column-layout group_15")}>
                  <div className={classes("row-layout group_16")}>
                    <p className={classes("typography__subtitle-2 content_2")}>
                      <span>MY BENEFITS</span>
                    </p>
                  </div>
                  <IgrList className={classes("list")}>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_6")}>
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>security</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Radiation protection health insurance planre</div>
                      <div slot="subtitle" key={uuid()}>$600 every other week</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_7")}>
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>remove_red_eye</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>20/20 Vision plans here</div>
                      <div slot="subtitle" key={uuid()}>$234 every other week</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_8")}>
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>child_friendly</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Child care savings</div>
                      <div slot="subtitle" key={uuid()}>$4955 remaining</div>
                    </IgrListItem>
                    <IgrListItem key={uuid()}>
                      <div style={{display: 'contents'}} slot="start" key={uuid()}>
                        <IgrAvatar shape="circle" className={classes("avatar_9")}>
                          <span className={classes("material-icons")} key={uuid()}>
                            <span key={uuid()}>security</span>
                          </span>
                        </IgrAvatar>
                      </div>
                      <div slot="title" key={uuid()}>Fire hazard protection  </div>
                      <div slot="subtitle" key={uuid()}>On da house!</div>
                    </IgrListItem>
                  </IgrList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
