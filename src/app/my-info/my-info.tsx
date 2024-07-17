import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './my-info.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();

export default function MyInfo() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('Erin');
  const [value1, setValue1] = useState<string | undefined>('First name');
  const [value2, setValue2] = useState<string | undefined>('Brockovich');
  const [value3, setValue3] = useState<string | undefined>('2');
  const [value4, setValue4] = useState<string | undefined>('123 Wallaby Lane');
  const [value5, setValue5] = useState<string | undefined>('Sacramento');
  const [value6, setValue6] = useState<string | undefined>('CA');
  const [value7, setValue7] = useState<number | undefined>(94203);

  return (
    <>
      <div className={classes("column-layout my-info-container")}>
        <div className={classes("column-layout page-content")}>
          <div className={classes("row-layout header")}>
            <div className={classes("row-layout group")}>
              <div className={classes("row-layout group_1")}>
                <img src="/src/assets/Avatar6.png" className={classes("image")} />
              </div>
              <div className={classes("column-layout group_2")}>
                <div className={classes("column-layout group_3")}>
                  <h4 className={classes("content_1")}>
                    <span>Erin Brockovich</span>
                  </h4>
                  <p className={classes("typography__subtitle-1 content_1")}>
                    <span>Water Quality Specialist</span>
                  </p>
                </div>
                <div className={classes("row-layout group_4")}>
                  <IgrButton variant="flat" size="large" className={classes("button button_1")}>
                    <span key={uuid()}>Personal</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_2")}>
                    <span key={uuid()}>Job</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_3")}>
                    <span key={uuid()}>Tme-off</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_4")}>
                    <span key={uuid()}>Emergency</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_5")}>
                    <span key={uuid()}>Documents</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_6")}>
                    <span key={uuid()}>Benefits</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" size="large" className={classes("button button_7")}>
                    <span key={uuid()}>Pay info</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
            </div>
          </div>
          <div className={classes("row-layout content")}>
            <div className={classes("row-layout group_5")}>
              <div className={classes("column-layout group_6")}>
                <div className={classes("column-layout group_7")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>Hire Date</span>
                  </p>
                  <p className={classes("typography__body-2 text_1")}>
                    <span>Feb 01, 2010</span>
                  </p>
                  <p className={classes("typography__caption text_1")}>
                    <span>10y-10m-7d</span>
                  </p>
                </div>
                <div className={classes("column-layout group_8")}>
                  <div className={classes("row-layout group_9")}>
                    <span className={classes("material-icons icon")}>
                      <span key={uuid()}>waves</span>
                    </span>
                    <p className={classes("typography__body-2 content_2")}>
                      <span>Waste water mgmt.</span>
                    </p>
                  </div>
                  <div className={classes("row-layout group_9")}>
                    <span className={classes("material-icons icon")}>
                      <span key={uuid()}>domain</span>
                    </span>
                    <p className={classes("typography__body-2 content_2")}>
                      <span>Nuclear Disposal</span>
                    </p>
                  </div>
                  <div className={classes("row-layout group_9")}>
                    <span className={classes("material-icons icon")}>
                      <span key={uuid()}>location_on</span>
                    </span>
                    <p className={classes("typography__body-2 content_2")}>
                      <span>California, USA</span>
                    </p>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text")}>
                    <span>Manager</span>
                  </p>
                  <div className={classes("row-layout group_11")}>
                    <IgrAvatar src="/src/assets/Avatar1.png" shape="circle" className={classes("avatar")}></IgrAvatar>
                    <p className={classes("typography__body-2 content_2")}>
                      <span>Donni Darko</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes("column-layout group_12")}>
                <div className={classes("row-layout group_13")}>
                  <span className={classes("material-icons icon_1")}>
                    <span key={uuid()}>perm_contact_calendar</span>
                  </span>
                  <h6 className={classes("content_2")}>
                    <span>Personal</span>
                  </h6>
                </div>
                <p className={classes("typography__subtitle-1 text_1")}>
                  <span>Basic Information</span>
                </p>
                <div className={classes("row-layout group_14")}>
                  <IgrInput label="First name" disabled="true" outlined="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("user-input")}></IgrInput>
                  <IgrInput label="Middle name" disabled="true" outlined="true" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("user-input")}></IgrInput>
                  <IgrInput label="Last name" disabled="true" outlined="true" value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("user-input")}></IgrInput>
                </div>
                <div className={classes("row-layout group_14")}>
                  <IgrSelect outlined="true" label="Gender" value={value3} change={(_c, e) => setValue3(e.detail.value)} className={classes("user-input")}>
                    <IgrSelectItem value="1" key="082188a7-417a-4ac3-aa8b-df5bce1bd561">
                      <span key={uuid()}>Male</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="14112ff6-c6e9-468d-8f85-cbec0eed2f6d">
                      <span key={uuid()}>Female</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="3" key="877476a1-d5b4-49a7-903b-51edd1573814">
                      <span key={uuid()}>It's complicated</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrSelect outlined="true" label="Marital status" className={classes("user-input")}>
                    <IgrSelectItem value="1" key="69a5438f-02bb-405f-ac77-bf4b721179e1">
                      <span key={uuid()}>Married</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="1" key="5cd4d3ce-5ab1-40c4-81ba-dc5fadcbe4db">
                      <span key={uuid()}>Single</span>
                    </IgrSelectItem>
                  </IgrSelect>
                </div>
                <div className={classes("row-layout group_15")}>
                  <IgrInput label="Address" required="true" outlined="true" value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("input")}></IgrInput>
                </div>
                <div className={classes("row-layout group_16")}>
                  <IgrInput label="City" required="true" outlined="true" value={value5} change={(_c, e) => setValue5(e.detail)} className={classes("input_1")}></IgrInput>
                  <IgrInput label="State" required="true" outlined="true" value={value6} change={(_c, e) => setValue6(e.detail)} className={classes("input_2")}></IgrInput>
                  <IgrInput type="number" label="Zip/Postal Code" required="true" outlined="true" value={value7?.toString()} change={(_c, e) => setValue7(parseFloat(e.detail))} className={classes("input_1")}></IgrInput>
                </div>
                <p className={classes("typography__subtitle-1 text_1")}>
                  <span>Contact</span>
                </p>
                <div className={classes("row-layout group_17")}>
                  <IgrInput type="tel" label="Home phone" outlined="true" className={classes("user-input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>home</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput type="tel" label="Work phone" outlined="true" className={classes("user-input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>domain</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput type="tel" label="Mobile phone" outlined="true" className={classes("user-input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_2")} key={uuid()}>
                        <span key={uuid()}>person</span>
                      </span>
                    </span>
                  </IgrInput>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
