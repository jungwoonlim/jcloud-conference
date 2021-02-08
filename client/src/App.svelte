<script lang="ts">
	const constraints:object = {
		audio: true,
		video: true
	}

	async function getMedia(constraints:object){
		let stream:any = null;
	
		try {
			stream = await navigator.mediaDevices.getUserMedia(constraints);
			/* 스트림 사용 */
			document.querySelector('video').srcObject = stream;
		} catch(err) {
			/* 오류 처리 */
			alert('카메라와 마이크를 허용해주세요');
		}
	}
	getMedia(constraints);
</script>

<main>
    <video id="localVideo" autoplay playsinline controls={false}>
		<track kind="captions">
	</video>
</main>

<style>
</style>