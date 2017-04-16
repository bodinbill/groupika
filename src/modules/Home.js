import React from 'react'
import Parser from "html-react-parser";

let htmlInput = `<div class="container">
		<div class="starter-template">
			<h1>GROUPIKA</h1>
			<p class="lead">“Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta</p>
		</div>
		<br />
		<div class="panel panel-default">
			<div class="panel-heading">
				<h2>ไต้หวัน (เกาสง-ไทเป)</h2>
			</div>
			<div class="panel-body">
				<p>วันที่ 7 - 15 ตุลาคม 2560</p>
				<p>ไปไต้หวันหามาร์คที่เกาสง เกาสงจะเป็นเมืองทางไต้ของไต้หวันแต่จะมีธรรมชาติด้วย เสร็จแล้วก็นั่งรถต่อไปไทเปจะได้เที่ยวให้ครบ</p>
				<p>ลายแทงของกิน <a href="https://www.pantip.com/topic/36219712">https://www.pantip.com/topic/36219712</a></p>
				<p>website: <a href="https://www.rome2rio.com/s/Bangkok/Kaohsiung/Taipei/Bangkok" target="_blank">แผนที่การเดินทาง</a></p>
				<h3>คนที่สนใจ (6 คน)</h3>
				<p>
					<span class="badge">ปาล์ม</span>
					<span class="badge">ฝัด</span>
					<span class="badge">บิว</span>
					<span class="badge">ต้น</span>
					<span class="badge">แชมป์</span>
					<span class="badge">ปัท</span>
				</p>
				<div class="row">
					<div class="col-lg-6"><img src="./static/images/005.jpg" /></div>
					<div class="col-lg-6"><img src="./static/images/006.jpg" /></div>
					<div class="col-lg-12"><img src="./static/images/007.jpg" /></div>
				</div>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h2>Black Mountain Huahin Pool Villas</h2>
			</div>
			<div class="panel-body">
				<p>วันที่ 14 - 15 มกราคม 2560</p>
				<p>บ้านพร้อมสระว่ายน้ำ บรรยากาศไม่อุดอู้เหมาะกับการกินดื่มสนทนากับเพื่อนฝูง</p>
				<p>website: <a href="http://www.blackmountainhuahin.com/resort/boende/" target="_blank">www.blackmountainhuahin.com</a>, พิกัด: <a href="https://goo.gl/maps/SbrqxcYBsY62" target="_blank">N 12.614289, E 99.891809</a></p>
				<h3>ค่าใช้จ่าย</h3>
				<p>โอนเงินให้ปาล์ม <strong>1,414 บาท ต่อคน</strong></p>
				<p>พงศกร รวดทรง 3022585490 ธนาคารไทยพานิชย์</p>
				<p>กฤติยาณี มิ่งศักดิ์ศรี 0161511676 ธนาคารกสิกรไทย</p>
				<h3>กิจกรรมพิเศษ</h3>
				<h4>กิจกรรมจับของขวัญหรรษา รับปี 2017</h4>
				<ul>
					<li>ให้ทุกคนนำของขวัญจำนวนกี่ชิ้นก็ได้ รวมราคาเป็น 67 บาท ต่อครอบครัว ไม่ขาดไม่เกิน เพื่อความสนุกอยากให้ห่อของขวัญมาด้วย โดยจะห่ออะไรมาก็ได้ที่ไม่ทำให้ของขวัญเสียหาย</li>
					<li>ของแต่ละชิ้นสามารถดูราคาเป็นไปเสร็จได้ (ราคาเป็นบาท), ไม่เป็นหน่วยเงินตรา วอชเชอร์ ธนบัตร หรือบัตรที่นำไปแลกสินค้า, ต้องเป็นของที่ใช้งานได้และยังไม่หมดอายุ และราคานี้ไม่รวมค่าห่อของขวัญ</li>
					<li>ยกตัวอย่างของครอบครัว คือ เอ้เบลล่าอันนา คือ 1 ครอบครัว, บิวเตย คือ 1 ครอบครัว, เบิร์ดเสริม (คนเดียว) คือ 1 ครอบครัว</li>
					<li>สำหรับแขกที่ลืมเอาของขวัญมา บาริสต้าบิวจะเสริฟเครื่องดื่มเมนูพิเศษให้ดื่ม 1 ช๊อตฟรี โดยจะเป็นการดื่มแทนการรับของขวัญ</li>
				</ul>
				<h3>คนที่โอนเงินแล้ว (22/22 คน)</h3>
				<p>
					<span class="badge">ปาล์ม (2)</span>
					<span class="badge">พี่ชายปาล์ม (2)</span>
					<span class="badge">ฝัด (2)</span>
					<span class="badge">บิว (2)</span>
					<span class="badge">เบิร์ด</span>
					<span class="badge">บี้</span>
					<span class="badge">ต้น</span>
					<span class="badge">แชมป์</span>
					<span class="badge">บาส (2)</span>
					<span class="badge">เล้ง (2)</span>
					<span class="badge">เอ้ (2)</span>
					<span class="badge">กิต (2)</span>
					<span class="badge">ปัท</span>
					<span class="badge">เจ๊</span>
				</p>
				<div class="row">
					<div class="col-lg-6"><img src="./static/images/001.jpg" /></div>
					<div class="col-lg-6"><img src="./static/images/002.jpg" /></div>
					<div class="col-lg-6"><img src="./static/images/003.jpg" /></div>
					<div class="col-lg-6"><img src="./static/images/004.jpg" /></div>
				</div>
			</div>
		</div>
	</div>`;

export default React.createClass({
	render() {
		return Parser(htmlInput)
	}
})
