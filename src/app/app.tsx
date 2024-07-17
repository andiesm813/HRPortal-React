import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>Rapid Fission Inc.</span>
            </h6>
            <IgrButton variant="flat" size="large" clicked={() => navigate(`/home`)} className={classes("button")}>
              <span key={uuid()}>HOME</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" size="large" clicked={() => navigate(`/my-info`)} className={classes("button")}>
              <span key={uuid()}>MY INFO</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" disabled="true" size="large" className={classes("button")}>
              <span key={uuid()}>PEOPLE</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" disabled="true" size="large" className={classes("button")}>
              <span key={uuid()}>MY FILES</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div slot="end" className={classes("row-layout group_1")} key={uuid()}></div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>notifications</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrAvatar src="/src/assets/Avatar6.png" shape="circle" className={classes("avatar")}></IgrAvatar>
          </div>
        </IgrNavbar>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
        <div className={classes("row-layout footer")}>
          <p className={classes("typography__body-2 text")}>
            <span>(c) 2020 IndigoDesign Inc.</span>
          </p>
        </div>
      </div>
    </>
  );
}
