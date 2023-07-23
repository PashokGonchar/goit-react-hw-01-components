import {
  SectionCustom,
  TitleCustom,
  UlCustom,
  LiCustom,
  SpanLabelCustom,
  SpanPercentageCustom,
} from './Statistics.styled';

const CreateStatistics = ({ title, stats }) => {
  return (
    <SectionCustom>
      {title ? <TitleCustom>{title}</TitleCustom> : null}

      <UlCustom>
        {stats.map(({ id, label, percentage }) => (
          <LiCustom key={id}>
            <SpanLabelCustom>{label}</SpanLabelCustom>
            <SpanPercentageCustom>{percentage}%</SpanPercentageCustom>
          </LiCustom>
        ))}
      </UlCustom>
    </SectionCustom>
  );
};

export default CreateStatistics;
