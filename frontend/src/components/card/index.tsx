import {
	Card,
	LeftArea,
	TagArea,
	ObjectArea,
	PartArea,
	AvatarRound,
	Letters,
	Div,
	SVG,
} from './style';
import { IDocs } from '../../interfaces';
import Tag from '../tag';
import { DotsThreeOutlineVertical } from 'phosphor-react';
import Tooltip from '../tooltip';

interface Doc {
	doc: IDocs;
	background?: string;
}

const CardComponent = ({ doc }: Doc) => {
	if (doc.status === 'aguard. assinatura') {
		doc.background = '#0ECDD9';
	}
	if (doc.status === 'em revisão') {
		doc.background = '#F1C40F';
	}
	if (doc.status === 'aguard. aprov.') {
		doc.background = '#F5650C';
	}
	if (doc.status === 'assinado') {
		doc.background = '#3598DC';
	}
	if (doc.status === 'arquivado') {
		doc.background = '#374F66';
	}

	const getLetters = (name: string) => {
		const splited = name.split(' ');
		const letters = splited[0][0] + splited[1][0];
		return letters;
	};

	return (
		<Card>
			<LeftArea>
				<div>
					<h1>{doc.title}</h1>
					<h2>{doc.sub_title}</h2>
				</div>
			</LeftArea>
			<TagArea>
				<Tag text={doc.status} background={doc.background} />
			</TagArea>
			<ObjectArea>Objeto:{doc.object}</ObjectArea>
			<PartArea>
				<p className="partes">Partes do contrato</p>
				<Div>
					{doc.parties.map((part, idx) => {
						return (
							<>
								<Tooltip content={part} direction="top" delay="0">
									<AvatarRound key={idx.toString()}>
										<Letters>{getLetters(part)}</Letters>
									</AvatarRound>
								</Tooltip>
							</>
						);
					})}
				</Div>
			</PartArea>
			<SVG>
				<DotsThreeOutlineVertical size={30} weight="fill" />
			</SVG>
		</Card>
	);
};

export default CardComponent;
