import { Box, Step, StepLabel, Stepper, styled } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import * as React from 'react';

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}



const steps = ['18: 30-22: 00 - Đón khách tại các khách sạn ở Quận 1, ra bến cảng thành phố.',
 'Lên du thuyền Indochina được chứng nhận quốc tế', 
 'Đi thuyền dọc theo Sông Sài Gòn từ 1 giờ đến 1 giờ 30 phút trong khi bữa tối 5 món được phục vụ',
'Thưởng thức các chương trình biểu diễn âm nhạc truyền thống Việt Nam'];

export default function VerticalSkedule() {
  return (
    <Box sx={{ width: '100%' }} >
      <Stepper orientation="vertical" >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
  
    </Box>
  );
}
