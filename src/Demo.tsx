import React, { useState } from 'react';
import './App.scss';
import { Column, Grid } from './component/Column';
import { Row } from './component/Row';
import { Button } from './component/Button';
import { Checkbox } from './component/Checkbox';
import { Radio } from './component/Radio';
import {
  Modal,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
} from './component/Modal';
import { ButtonGroup } from './component/ButtonGroup';
import { Icon, IconButton } from './component/Icon';
import { FormInput } from './component/Form/FormInput';
import { FormSelect } from './component/Form/FormSelect';
import { FormField } from './component/Form/FormField';
import { FormTextarea } from './component/Form/FormTextarea';
import { Appbar } from './component/Appbar';
import { Box } from './component/Box';
import { Sidebar } from './component/Sidebar';
import { Main } from './component/Main/index';
import { Body } from './component/Body/index';
import { Layout } from './component/Layout';
function Demo() {
  const [checked, setChecked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [selectedFruit, setSelectedFruit] = useState('');

  const selectOptions = [
    {
      value: 'banana',
      label: '바나나',
    },
    {
      value: 'apple',
      label: '사과',
    },
    {
      value: 'pineapple',
      label: '파인애플',
    },
  ];

  function handleChecked() {
    setChecked(!checked);
  }
  function handleChangeRadio(e: any) {
    setSelectedFruit(e.target.value);
  }
  return (
    <>
      <Body>
        <Appbar right={<IconButton name={'keyboard'} />}>{'동숲 ui'}</Appbar>
        <Layout>
          <Sidebar>
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
            사이드바
            <br />
          </Sidebar>
          <Main>
            <section
              className={'container mx-auto'}
              style={{
                marginTop: 10,
              }}
            >
              <Box>
                <h2>{'row와 컬럼'}</h2>
                <Grid size={1}>
                  <div>{'한줄짜리'}</div>
                </Grid>
                <Grid size={2}>
                  <div>{'반줄짜리'}</div>
                  <div>{'반줄짜리'}</div>
                </Grid>
                <Grid size={6}>
                  <Column start={3}>{'2칸 띄워서 시작'}</Column>
                  <Column span={2}>{'2칸 큰 칸 먹음'}</Column>
                </Grid>
              </Box>
            </section>
            <section>
              <Box>
                <h2>{'TYPOGRAPHY'}</h2>
                <Row>
                  <h1>{'헤딩 1'}</h1>
                  <h2>{'헤딩 2'}</h2>
                  <h3>{'헤딩 3'}</h3>
                  <h4>{'헤딩 4'}</h4>
                  <h5>{'헤딩 5'}</h5>
                  <h6>{'헤딩 6'}</h6>
                  <p>The base type is 15px over 1.6 line height (24px)</p>

                  <strong>Bolded</strong>
                  <br />
                  <em>Italicized</em>
                  <br />
                  <a href={'#/'}>Colored</a>
                  <br />
                  <u>Underlined</u>
                </Row>
              </Box>
            </section>
            <section>
              <Box>
                <h2>{'버튼'}</h2>
                <div className={'p-2'}>
                  <Button>{'메인 버튼'}</Button>
                </div>
                <br />
                <ButtonGroup classNames={'p-2'}>
                  <Button warning>{'빨간 버튼'}</Button>
                  <Button disabled>{'비활성화된 버튼'}</Button>
                </ButtonGroup>
                <br />
                <ButtonGroup stick={true} classNames={'p-2'}>
                  <Button>{'메인 버튼'}</Button>
                  <Button>{'메인 버튼'}</Button>
                  <Button warning>{'빨간 버튼'}</Button>
                  <Button disabled>{'비활성화된 버튼'}</Button>
                </ButtonGroup>
              </Box>
            </section>
            <section>
              <Box>
                <h2>{'폼'}</h2>
                <Grid size={2} gap={1}>
                  <FormInput
                    id={'email'}
                    label={'Your email'}
                    type={'email'}
                    className={'mb-4'}
                  />
                  <FormSelect
                    id={'select'}
                    label={'Reason for contacting'}
                    options={selectOptions}
                  />
                </Grid>
                <Grid size={6}>
                  <FormInput
                    id={'email'}
                    label={'Your email'}
                    type={'email'}
                    value={'aaa@bbb.com'}
                    disabled
                  />
                </Grid>
                <Grid size={6}>
                  <Checkbox
                    checked={checked}
                    onChange={handleChecked}
                    label={'동의 하십니까?'}
                  />
                  <Checkbox
                    checked={checked}
                    onChange={handleChecked}
                    label={'동의 하십니까?'}
                    disabled
                  />
                </Grid>
                <Grid size={6}>
                  <FormField label={'과일을 골라라'} id={'agree'}>
                    <Radio
                      checked={selectedFruit === 'apple'}
                      onChange={handleChangeRadio}
                      name={'fruit'}
                      label={'사과'}
                      value={'apple'}
                    />
                    <Radio
                      checked={selectedFruit === 'banana'}
                      onChange={handleChangeRadio}
                      name={'fruit'}
                      label={'바나나'}
                      value={'banana'}
                    />
                    <Radio
                      checked={selectedFruit === 'strawberry'}
                      onChange={handleChangeRadio}
                      name={'fruit'}
                      label={'딸기'}
                      value={'strawberry'}
                      disabled
                    />
                  </FormField>
                </Grid>
                <FormTextarea id={'message'} label={'Message'} />
                <Button type={'submit'}>{'SUBMIT'}</Button>
              </Box>
            </section>
            <section>
              <Box>
                <h2>Lists</h2>
                <Grid size={2}>
                  <ul>
                    <li>
                      Unordered lists have basic styles They use the circle list
                      style
                    </li>
                    <li>
                      Nested lists styled to feel right Can nest either type of
                      list
                    </li>
                    <li>into the other Just more list items mama san</li>
                  </ul>
                  <ol>
                    <li>
                      Unordered lists have basic styles They use the circle list
                      style
                    </li>
                    <li>
                      Nested lists styled to feel right Can nest either type of
                      list
                    </li>
                    <li>into the other Just more list items mama san</li>
                  </ol>
                </Grid>
              </Box>
            </section>
            <section>
              <Box>
                <h2>코드</h2>
                <pre>
                  <code>{`.some-class {
  background-color: red;
}`}</code>
                </pre>
              </Box>
            </section>
            <section>
              <Box>
                <h2>테이블</h2>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Sex</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dave Gamache</td>
                      <td>26</td>
                      <td>Male</td>
                      <td>San Francisco</td>
                    </tr>
                    <tr>
                      <td>Dwayne Johnson</td>
                      <td>42</td>
                      <td>Male</td>
                      <td>Hayward</td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </section>

            <section>
              <Box>
                <h2>{'모달'}</h2>
                <ButtonGroup>
                  <Button onClick={() => setIsModalOpen(true)}>모달열기</Button>
                  <Button onClick={() => setIsModalOpen2(true)}>
                    모달열기
                  </Button>
                </ButtonGroup>
              </Box>
            </section>
            <section>
              <Box>
                <h2>{'아이콘'}</h2>
                <p>
                  <Icon name={'keyboard'} /> 아이콘의 기본 크기는 24px, 글자의
                  기본크기는 1.5em (15px)
                </p>
                <p>
                  {'material.io를 이용하고 있습니다. '}
                  <a
                    target={'_blank'}
                    rel="noopener noreferrer"
                    href={
                      'https://material.io/resources/icons/?icon=keyboard&style=baseline'
                    }
                  >
                    여기
                  </a>
                  에서 정의된 아이콘 이름을 이용합니다.
                </p>
              </Box>
            </section>
            <section>
              <Box>
                <h2>{'아이콘 버튼'}</h2>
                <div>
                  <p>{'글자와 혼영되어 보이는 버튼'}</p>
                  <Button>12</Button>
                  <IconButton name={'zoom_in'} />
                  <IconButton name={'zoom_out'} />
                  <IconButton name={'send'} />
                  <IconButton name={'attachment'} />
                  {/* <Button></Button> */}
                </div>
              </Box>
            </section>
            {isModalOpen2 ? (
              <Modal requestClose={() => setIsModalOpen2(false)}>
                <ModalContainer>
                  <ModalHeader>{'헤더'}</ModalHeader>
                  <ModalBody>{'바디'}</ModalBody>
                  <ModalFooter>{'풋터'}</ModalFooter>
                </ModalContainer>
              </Modal>
            ) : null}
            {isModalOpen ? (
              <Modal requestClose={() => setIsModalOpen(false)}>
                <div
                  style={{
                    backgroundColor: 'white',
                    minWidth: 200,
                    padding: 20,
                  }}
                >
                  {'모달'}
                  <br />
                  {'모달'}
                  <br />
                  {'모달'}
                  <br />
                  {'모달'}
                  <br />
                  {'모달'}
                  <br />
                  {'모달'}
                  <br />
                  {'모달'}
                  <br />
                </div>
              </Modal>
            ) : null}
          </Main>
        </Layout>
      </Body>
    </>
  );
}

export default Demo;
